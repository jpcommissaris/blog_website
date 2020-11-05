import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

import Layout from '../../components/layout/Layout'
import {useState} from 'react'
import {listBlogsWithCategoriesAndTags} from '../../actions/blog'
import BlogCard from '../../components/blog/BlogCard'
import {API, DOMAIN} from '../../config'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const containerstyle= {
    padding: '50px 30px',
    width: '100%',
    
}


const index = ({blogs, categories, tags, totalBlogs, blogsLimit, blogSkip}) => {

    const router = useRouter()
    const [limit, setLimit] = useState(blogsLimit)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(totalBlogs)
    const [loadedBlogs, setLoadedBlogs] = useState(blogs)

    const loadMore = () => {
        let toSkip = skip+limit
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setLoadedBlogs([...loadedBlogs, ...data.blogs])
                setSize(data.size)
                setSkip(toSkip) 
            }
        })
    }

    const head = () => (
        <Head>
            <title>Programming blogs | Julian Commissaris </title>
            <meta 
                name="description" 
                content="blogs on programming react node next python and web development"
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta 
                property='og:title'
                content={`latest web development blogs | Julian Commissaris`}
            />
            <meta 
                name="og:description" 
                content="blogs on programming react node next python and web development"
            />
            <meta name="og:type" content="website"/>
            <meta name="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta name="og:site_name" content={'juliancommissaris'}/>

            <meta name="og:image" content={`${DOMAIN}/static/images/blogmeta.png`}/>
            <meta name="og:image:secure_url" content={`${DOMAIN}/static/images/blogmeta.png`}/>
            <meta name="og:image:type" content='image/png'/>

        </Head> 
    )

    const body = () => (
        <Layout blog>
            <main style={{backgroundColor: '#F8F8F8'}}>

                <Container fluid='lg' style={containerstyle}>
                    <header>
                        {showLoadedBlogs()}   
                        {loadMoreButton()} 
                    </header>  
                </Container>

            </main>
        </Layout>
    )

    const showLoadedBlogs = () => (
        <Row>
            <Col md={6}>
                {loadedBlogs.map((blog, i) => (
                    i%2==0 && <BlogCard key={i} blog={blog} /> 
                ))}
            </Col>
            <Col md={6}>
                {loadedBlogs.map((blog, i) => (
                    i%2==1 && <BlogCard key={i} blog={blog} /> 
                ))}
            </Col>
        </Row>
    )

    const loadMoreButton = () => (
        <Row className='text-center justify-content-center pt-3'>
            {size > 0 && size >= limit &&
            <button onClick={loadMore} className= 'btn btn-load-more shadow-sm'>
                LOAD MORE
            </button>}
        </Row>
    )


    return (
        <React.Fragment>
            {head()}
            {body()}
        </React.Fragment>
        
    )
}

//good for SEO because the first time it sees your page it will see all data from blog

index.getInitialProps = () => {
    let skip = 0
    let limit = 2
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        return {
            blogs: data.blogs,
            categories: data.categories,
            tags: data.tags,
            totalBlogs : data.size,
            blogsLimit: limit,
            blogsSkip: skip
        }
    })
}

export default index