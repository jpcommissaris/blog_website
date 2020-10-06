import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import {getCookie, isAuth} from '../../actions/auth'
import {listBlogs, removeBlog} from '../../actions/blog'
import moment from 'moment'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import blog from '../../../backend/models/blog'


const ListBlogs = () => {
    const token = getCookie('token')
    const router = useRouter()

    const [blogs, setBlogs] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        loadBlogs()
    },[])

    const loadBlogs = () => {
        listBlogs().then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setBlogs(data)
            }
        })
    }
    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setMessage(data.message)
                loadBlogs()
            }
        })
    }


    const showAllBlogs = () => (
        blogs.map((blog, i) => {
            let link = isAuth && isAuth.role === 1 ? `/admin/crud/${blog.slug}` : `/user/crud/${blog.slug}`
            return (
                <div key={i} className='mt-5'>
                    <h3>{blog.title}</h3>
                    <p className='mark'> Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}</p>
                    <Link href={link}>
                        <a className='btn btn-sm btn-primary mr-1'> update </a>
                    </Link>
                    <Button variant='danger' size='sm' onClick={() => deleteBlog(blog.slug)}>
                        delete
                    </Button>    
                </div>
            )
        })
    )


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={12} >
                        {message && <p className='alert alert-warning'>{message}</p>}
                        {showAllBlogs()}
                    </Col>  
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default ListBlogs