import Head from 'next/head'
import Link from 'next/link'
import parse from 'html-react-parser'
import moment from 'moment' 
import {useEffect, useState} from 'react'

import Layout from '../../components/layout/Layout'
import RelatedCard from '../../components/blog/RelatedCard'
import {singleBlog, listRelatedBlogs, getLatestBlog} from '../../actions/blog'
import {API, DOMAIN} from '../../config'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const containerStyle = {
    maxWidth: '1200px',
    padding: '60px'
}

const timestyle= {
    margin: '0px',
    fontSize: '14px',
    padding: '2px 4px',
    fontStyle: 'oblique',
}

const authorStyle = {
    margin: '0px',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '2px 0px',
}

const SingleBlog = ({blog, query}) => {

    const [related, setRelated] = useState([])
    const [latest, setLatest] = useState('')

    useEffect(() => {
        loadRelated()
        loadLatest()
    }, [blog])

    const loadRelated = () => {
        listRelatedBlogs({blog}).then(data => {
            setRelated(data)
        })
    }

    const loadLatest = () => {
        getLatestBlog({blog}).then(data => {
            console.log(data)
            setLatest(data)
        })
    }

    const showRelatedBlogs = () => (
        related && related.map((blog, i) => (
            <RelatedCard key={i} blog={blog} />
        ))
    )

    

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

    const showBlogTags = (blog) => {
        return blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a href={`/tags/${t.slug}`} className='btn btn-tag' > {t.name} </a>
            </Link>
        ))
    }


    return (
        <React.Fragment>
            {head()}
            <Layout blog >
                <main>
                    <article> 
                        <Container fluid style={containerStyle}>
                            <Row>
                                <Col md='8'>
                                    <section>
                                        <hr/>
                                        <h1 className='font-weight-bold'> {blog.title} </h1>

                                    </section>
                                    <section>
                                        <p  className='lead ml-1 mb-0'> 
                                            <span style={authorStyle}>Julian Commissaris </span>- <span style={timestyle}> Published {moment(blog.updatedAt).fromNow() } </span>
                                        </p>
                                    </section>
                                    <section>
                                        <Image 
                                            fluid rounded 
                                            src={`${API}/blogs/photo/${blog.slug}`} 
                                            alt=''
                                            className=' pt-4 pb-5 featured-image'
                                        />
                                    </section>
                                    <section className='blog-body'>
                                        <div>
                                            {parse(blog.body)}
                                        </div>
                                    </section>
                                </Col>
                                <Col md='4' style={{padding: '60px 10px 10px 50px'}}>
                                    <section>
                                        <h2>Check Out My Latest Blog</h2>
                                        {latest && <RelatedCard blog={latest[0]} />}
                                        <hr/>
                                    </section>
                                    <section>
                                        <h2>Related Blogs</h2>
                                        {showRelatedBlogs()}
                                        <hr/>
                                    </section>
                                </Col>
                            </Row>
                             
                        </Container>
                    </article>
                </main>
            </Layout>
        </React.Fragment> 
    )

}

SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then(data => {
        return {blog: data, query}
    })
}

export default SingleBlog
