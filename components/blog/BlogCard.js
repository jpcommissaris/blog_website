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
    width: '100%',
    minWidth: '200px',
    backgroundColor: 'white',
    border: 'solid black 1px',
}

const timestyle= {
    margin: '0px',
    fontSize: '14px',
    padding: '2px 4px',
    fontStyle: 'oblique',
}


const BlogCard = ({blog}) => {

    const showBlogTags = (blog) => (
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className='btn btn-tag' > {t.name} </a>
            </Link>
        ))
    )

    return (
        <article label= 'blog post'>
            <Container fluid className="pl-3 pr-3 lead pb-4">
                <Card className="rounded blog-card text-dark" style={cardstyle}>
                    <section className='aspect-ratio-box'>
                        <Link href={`/blogs/${blog.slug}`}>
                            <Card.Img 
                                variant="top" 
                                src={`${API}/blogs/photo/${blog.slug}`}
                                alt={blog.title}  
                            />
                        </Link>
                    </section>
                    <section>
                        <Link href={`/blogs/${blog.slug}`}>
                            <Card.Title style={{fontSize: '32px'}} className= 'blog-card-link text-center ml-2 mr-2 mt-4 mb-2'>
                                {blog.title}
                            </Card.Title>
                        </Link>
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
                        {console.log(blog.tags)}
                    </section>
                    <section>
                        <p style={timestyle} className='lead ml-1 mb-0'> 
                            Published {moment(blog.updatedAt).fromNow()}
                        </p>
                    </section>
                </Card>

            </Container>
        </article>
        
           
    )
}
export default BlogCard