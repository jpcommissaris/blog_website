import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


const BlogSidebar = () => {

    const [open, setOpen] = useState(false)
    const sidebar = useRef(null)

    useEffect(() => {
        if(open){
            window.addEventListener('click', handleClick)
            return () => {
                window.removeEventListener('click', handleClick);
            }
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

    return (
            <Container >
                {renderButton()}
                <div ref={sidebar} className={getClasses()}>
                    <Row>
                        <Col md='12'>
                            <FontAwesomeIcon icon={faTimes} className='btn-exit' onClick={() => setOpen(open => !open)}/>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
    )
}
export default BlogSidebar