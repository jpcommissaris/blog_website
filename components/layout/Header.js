import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {APP_NAME} from '../../config.js'
import Link from 'next/link'
import SocialMediaLinks from './SocialMediaLinks'
import BlogSidebar from './BlogSidebar';
import SearchBar from './SearchBar';
import {useState, useEffect} from 'react'
import {searchBlog} from '../../actions/blog'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const style = {
    width: '100%',
    borderStyle: 'solid none solid none' ,
    borderWidth: '1px',
    borderColor: 'white',
} 

const h1style = {
    padding: '0px',
    maring: '0px'
}


function Header({blog}) {

    const [padding, setPadding] = useState('ex-large')
    

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > 45) setPadding('small-opacity')
            else if(window.scrollY < 1) setPadding('ex-large')
        })
    }, [])

    const getClasses = () => {
        return `padding-${padding}`
    }
    
    return (
        <Navbar className={getClasses()} sticky='top' style={style}>
            <Container fluid>
                <Nav style={{width: '100%'}} className='mx-auto'>
                    <Col sm='3' className= 'align-self-center'>
                        <BlogSidebar />
                    </Col>
                    <Col sm='6' className= 'text-center align-self-center'>
                        <Link href='/'>
                            <Navbar.Brand href='/' style={{color: 'white', fontSize: '32px', margin: '0px'}} >Julian's Tech Blog</Navbar.Brand>
                        </Link>
                    </Col>
                    <Col sm='3' className= 'align-self-center'>
                        {blog && <SearchBar />}
                    </Col>
                </Nav> 
            </Container>
        </Navbar>
    
    )
}
export default Header