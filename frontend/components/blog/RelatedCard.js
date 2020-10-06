import Link from 'next/link'
import {API} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment' 

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const imagestyle = {
    maxHeight: 'auto',
    width: '100%'
}


const RelatedCard = ({blog}) => {
    return (
        <Card>
            <section>
                <Link href={`/blogs/${blog.slug}`}>
                    <Card.Img
                        className='img img-fluid' 
                        style={imagestyle} 
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title} 
                    />        
                </Link>
            </section>
            <section>
                <Card.Body>
                    <Link href={`/blogs/${blog.slug}`}>
                        <Card.Title className='h5'>
                            {blog.title}  
                        </Card.Title>        
                    </Link>
                    <Card.Text>
                        {renderHTML(blog.excerpt)}
                    </Card.Text>
                </Card.Body>
            </section>
            <section>
                <Card.Body>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className=''>read more</a>
                    </Link>
                    {`Post ${moment(blog.updatedAt).fromNow()} by ${blog.postedBy.name}`}
                </Card.Body>
            </section>
        </Card>
    )
}
export default RelatedCard