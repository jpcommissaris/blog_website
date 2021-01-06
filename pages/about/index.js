import Layout from '../../components/layout/Layout'
import AboutMe from '../../components/about/AboutMe'
import AboutHeader from '../../components/about/AboutHeader'
import AboutImage from '../../components/about/AboutImage'
import Head from 'next/head'
import MetaData from '../../components/layout/MetaData'

import Container from 'react-bootstrap/Container'

const containerstyle= {
    position: 'relative',
    padding: '20px',
    maxWidth: '850px', 
    margin: 'auto',
    backgroundColor: 'white'
}

const about = () => (
        <Layout>
            <MetaData title='About Julian Commissaris' description='about me page' />
            <Container style={containerstyle}>
                <AboutHeader />
                <AboutImage /> 
                <AboutMe/>
            </Container>           
        </Layout>   
)

export default about;