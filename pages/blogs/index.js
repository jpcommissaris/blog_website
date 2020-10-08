import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'


import Layout from '../../components/layout/Layout'
import {useState} from 'react'
import {listBlogsWithCategoriesAndTags} from '../../actions/blog'
import BlogCard from '../../components/blog/BlogCard'
import {API, DOMAIN, APP_NAME} from '../../config'



import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



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
            <title>Programming blogs | {APP_NAME} </title>
            <meta 
                name="description" 
                content="blogs on programming react node next python and web development"
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta 
                property='og:title'
                content={`latest web development blogs | ${APP_NAME}`}
            />
            <meta 
                name="og:description" 
                content="blogs on programming react node next python and web development"
            />
            <meta name="og:type" content="website"/>
            <meta name="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta name="og:site_name" content={`${APP_NAME}`}/>

            <meta name="og:image" content={`${DOMAIN}/static/images/blogmeta.png`}/>
            <meta name="og:image:secure_url" content={`${DOMAIN}/static/images/blogmeta.png`}/>
            <meta name="og:image:type" content='image/png'/>

        </Head> 
    )

    const body = () => (
        <Layout>
            <main>
                <Container fluid>
                    <header>
                        <Col md={12}>
                            <h1 className="display-5 font-weight-bold text-center">
                                Blogs 
                            </h1>   
                        </Col>  
                        <section>
                            {showAllCategories()}    
                        </section>
                    </header>  
                </Container>
                
                <Container fluid> {showLoadedBlogs()}</Container>
                <Container fluid className='text-center'> {loadMoreButton()}</Container>
            </main>
        </Layout>
    )


    const showAllCategories = () => {
        return (
            <div className='text-center pb-5'>
                {categories.map((c, i) => (
                    <Link href={`/categories/${c.slug}`} key={i}>
                        <a className='btn btn-category'> {c.name} </a>
                    </Link>
                ))}
            </div> 
        )
    }

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => {
            return (
            <article key={i}>
                <BlogCard blog={blog} /> 
                <hr />
            </article>
        )})
    }

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit &&
            <button onClick={loadMore} className= 'btn btn-primary btn-lg'>
                load more
            </button>
        )
    }

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
        if(data.error){
            console.log(data.error)
        }else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs : data.size,
                blogsLimit: limit,
                blogsSkip: skip
            }
        }
    })
}

export default index