import Head from 'next/head'
import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment' 
import {useEffect, useState} from 'react'

import Layout from '../../components/layout/Layout'
import RelatedCard from '../../components/blog/RelatedCard'
import {singleBlog, listRelatedBlogs} from '../../actions/blog'
import {API, DOMAIN} from '../../config'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const SingleBlog = ({blog, query}) => {

    const [related, setRelated] = useState([])

    useEffect(() => {
        loadRelated()
    }, [])

    const loadRelated = () => {
        listRelatedBlogs({blog}).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setRelated(data)
            }
        })
    }

    const showRelatedBlogs = () => {
        console.log(related)
        return (
            <Row>
                {related.map((blog, i) => (
                    <Col md={4} key={i}>
                        <RelatedCard blog={blog} />
                    </Col>
                ))}
            </Row>
        )
    }

    const head = () => (
        <Head>
            <title> {blog.title} | Julian Commissaris </title>
            <meta 
                name="description" 
                content={blog.meta_desc}
            />

            <link rel="canonical" href={`${DOMAIN}${query.slug}`} />
            <meta 
                property='og:title'
                content={`${blog.title} | Julian Commissaris`}
            />
            <meta 
                name="og:description" 
                content="blogs on programming react node next python and web development"
            />
            <meta name="og:type" content="website"/>
            <meta name="og:url" content={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta name="og:site_name" content={`juliancommissaris`}/>

            <meta name="og:image" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta name="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta name="og:image:type" content='image/png'/>
        </Head> 
    ) 

    const showBlogCategories = (blog) => {
        return blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className='btn btn-category' > {c.name} </a>
            </Link>
        ))
    }

    const showBlogTags = (blog) => {
        return blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className='btn btn-tag' > {t.name} </a>
            </Link>
        ))
    }


    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article> 
                        <Container fluid>
                            <section>
                                <Row style={{marginTop: '-30px'}}>
                                    <Image 
                                        fluid rounded 
                                        src={`${API}/blog/photo/${blog.slug}`} 
                                        alt={blog.title}
                                        className='featured-image'
                                    />
                                </Row> 
                            </section> 
                            <section>
                                <Container>
                                    <h1 className='display-2 pb-3 text-center font-weight-bold'>{blog.title}</h1>
                                    <p className='mark pt-2 pb-2'> 
                                        Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
                                    </p>
                                    <div className= 'pb-3'>
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                    </div>
                                </Container>
                            </section>
                        </Container>
                        <Container fluid>
                            <section>
                                <Col md={12} className='lead'>
                                    {renderHTML(blog.body)}
                                </Col>
                            </section> 
                        </Container>
                        <Container fluid className='pb-5'>
                            <section>
                                <h4 md={12} className='text-center pt-5 pb-5 h2'> Related blogs </h4>  
                                <hr />
                                {showRelatedBlogs()} 
                            </section> 
                        </Container>
                    </article>
                </main>
            </Layout>
        </React.Fragment> 
    )

}

SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then(data => {
        if(data.error){
            console.log(data.error)
        }else{
            return {blog: data, query}
        }
    })
}

export default SingleBlog
