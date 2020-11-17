import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import SocialMediaLinks from './SocialMediaLinks'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const linkstyle= {
    color: 'black',
    fontSize: '20px',
    fontWeight: '300'
}


const BlogSidebar = () => {

    const [open, setOpen] = useState(false)
    const sidebar = useRef(null)

    useEffect(() => {
        if(open){
            window.addEventListener('click', handleClick)
        }
        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, [open])

    const handleClick = (e) => {
        if(sidebar && !sidebar.current.contains(e.target)){
            setOpen(false)
        }
    }

    const getClasses = () => {
        let sidebarOpen = open ? 'sb-slideIn' : 'sb-slideOut'
        return `sidebar ${sidebarOpen}`
    }

    const renderButton = () => {
        return open ? '' : <FontAwesomeIcon icon={faBars} className='btn-hamburger' onClick={() => setOpen(open => !open)}/>
    }

    const navLink = (text, href) => (
        <Link href={href}>
            <div className=' pt-2 pb-2 underline-on-hover opacity-on-hover'> 
                <a style={linkstyle}  href='#'>{text}</a>
            </div>
        </Link>
    )

    return (
            <Container >
                {renderButton()}
                <div ref={sidebar} className={getClasses()}>
                    <Row>
                        <Col md='12'>
                            <FontAwesomeIcon icon={faTimes} className='btn-exit' onClick={() => setOpen(open => !open)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' className= ' pt-3 text-center'>
                            {navLink('BLOG', '/')}
                            {navLink('ABOUT', '/about')}
                            {navLink('PROJECTS', '/projects')}
                            {navLink('CONTACT ME', '/contact')}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' className= 'pt-3'>
                            <p>Hey yall, I'm Julian and this is my tech blog. </p>
                            <p>I'm a college student at UCSB that enjoys learning and engaing in the tech world. In this blog, I plan to post projects, book reviews, and my thouhgts on trending tech topics. </p>
                            <p>If you have any questions, comments or thoughts, feel free to contact me.</p>
                            <SocialMediaLinks color='black'/>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
    )
}
export default BlogSidebar