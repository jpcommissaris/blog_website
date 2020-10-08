import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {APP_NAME} from '../../config.js'
import Link from 'next/link'
import SocialMediaLinks from './SocialMediaLinks'

const style = {
    width: '100%',
    height: '50px',
    padding: '16px 36px',
    borderStyle: 'solid none solid none' ,
    borderWidth: '1px',
    borderColor: '#7d7d7c'
} 



function Header(props) {

    const navLink = (link, text) => {
        return(
            <React.Fragment>
                <Link href={link}>
                    <Nav.Link href={link}> {text}</Nav.Link>
                </Link>
            </React.Fragment>
        )
    }
    
    return (
        <Navbar variant= "light" bg="light" expand="sm" style={style}>
            <Link href="/">
                <Navbar.Brand href='/'>home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    {navLink('/about', 'about')}
                    {navLink('/blogs', 'blogs')}
                    {navLink('/projects', 'projects')}
                </Nav> 
                <Nav>
                <SocialMediaLinks/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}
export default Header



