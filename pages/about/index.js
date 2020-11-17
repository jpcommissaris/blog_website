import Layout from '../../components/layout/Layout'
import AboutMe from '../../components/about/AboutMe'
import AboutHeader from '../../components/about/AboutHeader'
import AboutImage from '../../components/about/AboutImage'
import ResumeLink from '../../components/about/ResumeLink'
import Link from 'next/link'

import Container from 'react-bootstrap/Container'

const containerstyle= {
    position: 'relative',
    padding: '20px',
    maxWidth: '850px', 
    margin: 'auto',
    backgroundColor: 'white'
}

const about = () => {
    return(
        <Layout>
            <Container style={containerstyle}>
                <AboutHeader />
                <AboutImage /> 
                <AboutMe/>
            </Container>           
        </Layout>   
    )
}

export default about;