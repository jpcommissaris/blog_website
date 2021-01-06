import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

import Layout from '../../components/layout/Layout'
import {useState} from 'react'
import {listProjects} from '../../actions/project'
import ProjectCard from '../../components/project/ProjectCard'
import {API, DOMAIN} from '../../config'
import MetaData from '../../components/layout/MetaData'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const containerstyle= {
    padding: '20px',
    width: '100%',
    margin: 'auto',
}


const index = ({projects, totalProjects, projectLimit, projectsSkip}) => {

    const router = useRouter()
    const [limit, setLimit] = useState(projectLimit)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(totalProjects)
    const [loadedProjects, setLoadedProjects] = useState(projects)

    const loadMore = () => {
        let toSkip = skip+limit
        listProjects(toSkip, limit).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setLoadedProjects([...loadedProjects, ...data.projects])
                setSize(data.size)
                setSkip(toSkip) 
            }
        })
    }

    const head = () => (
        <Head>
            <title>Programming Projects | Julian Commissaris </title>
            <meta 
                name="description" 
                content="programming projects using react node next python and web development"
            />
        </Head> 
    )

    const body = () => (
        <Layout >
            <main style={{backgroundColor: '#F8F8F8'}}>
                <Container style={containerstyle}>
                    <header>
                        {showLoadedProjects()}   
                        {loadMoreButton()} 
                    </header>  
                </Container>
            </main>
        </Layout>
    )

    const showLoadedProjects = () => (
        <Row >
            <Col md={12}>
                {console.log(loadedProjects)}
                {loadedProjects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
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
    let limit = 5
    return listProjects(skip, limit).then(data => {
        return {
            projects: data.projects,
            totalProjects : data.size,
            projectsLimit: limit,
            projectsSkip: skip
        }
    })
}

export default index