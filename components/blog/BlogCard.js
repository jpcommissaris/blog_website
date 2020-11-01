import Link from 'next/link'
import {API} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment' 

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'

const hrstyle = {
    backgroundColor: 'darkgreen',
    height: '2px',
    width: '50px',
    margin: '0 auto',
    textAlign: 'center'
}

const cardstyle= {
    width: '100%'
}

const timestyle= {
    margin: '0px',
    fontSize: '14px',
    padding: '2px 4px',
    fontStyle: 'oblique',
}


const BlogCard = ({blog}) => {

    const showBlogTags = (blog) => {
        return blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className='btn btn-tag' > {t.name} </a>
            </Link>
        ))
    }



    return (
        <article label= 'blog post'>
            <Container fluid className="lead pb-4">
                <Link href={`/blogs/${blog.slug}`}>
                    <Card className="shadow rounded blog-card text-dark" style={cardstyle}>
                        <section className='aspect-ratio-box'>
                            <Card.Img 
                                variant="top" 
                                src={`${API}/blogs/photo/${blog.slug}`}
                                alt={blog.title}  
                            />
                        </section>
                        <section>
                            <Card.Title className= 'text-center pl-5 pr-5 pt-4 pb-2'>
                                {blog.title}
                            </Card.Title>
                            <hr style={hrstyle} size='30'/>
                        </section>
                        <section>
                            <Card.Body>
                                <Card.Text>
                                    {renderHTML(blog.excerpt)}
                                </Card.Text>
                            </Card.Body>
                        </section>
                        <section>
                            {showBlogTags(blog)}
                        </section>
                        <section>
                            <p style={timestyle} className='lead ml-1 mb-0'> 
                                Published {moment(blog.updatedAt).fromNow()}
                            </p>
                        </section>
                    </Card>
                </Link>
            
            </Container>
        </article>
        
           
    )
}
export default BlogCard