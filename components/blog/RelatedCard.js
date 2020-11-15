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

const timestyle= {
    margin: '0px',
    fontSize: '14px',
    padding: '2px 0px',
    fontStyle: 'oblique',
}


const RelatedCard = ({blog}) => (
    <Card className='blog-card text-dark mt-3 mb-4'>
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
            <Card.Body>
                <Link href={`/blogs/${blog.slug}`}>
                    <Card.Title className='blog-card-link h5'>
                        {blog.title}  
                    </Card.Title>        
                </Link>
                <Card.Text>
                    {renderHTML(blog.excerpt)}
                </Card.Text>
                <p style={timestyle} className='lead ml-1 mb-0'> 
                    Published {moment(blog.createdAt).fromNow()}
                </p>
            </Card.Body>
        </section>
    </Card>
)
export default RelatedCard