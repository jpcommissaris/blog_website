import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {APP_NAME} from '../../config.js'
import Link from 'next/link'
import SocialMediaLinks from './SocialMediaLinks'
import {useState, useEffect} from 'react'

const style = {
    width: '100%',
    height: '50px',
    borderStyle: 'solid none solid none' ,
    borderWidth: '1px',
    borderColor: 'white',
    backgroundColor: 'rgb(34,42,53)'
} 



function Header(props) {
    const childRef = props.childRef
    const [padding, setPadding] = useState('large')

    useEffect(()=> {
        childRef.current.addEventListener('scroll', (e) => {
            console.log(childRef.current.scrollTop)
            let padding = childRef.current.scrollTop > 10 ? 'small' : 'large'
            setPadding(padding)
        })
    }, [])

    const getClasses = () => {
        return `padding-${padding}`
    }

    const navLink = (link, text) => {
        return(
            <React.Fragment>
                <Link href={link}>
                    <div className='underline-on-hover pl-2 pr-2 font-weight-bold'>
                        <a href={link}> {text}</a>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
    
    return (
        <Navbar className={getClasses()} expand="sm" style={style}>
            <Link href="/">
                <Navbar.Brand style={{color: 'white', fontSize: '24px'}}  href='/'>Home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    {navLink('/about', 'About')}
                    {navLink('/blogs', 'Blog')}
                    {navLink('/projects', 'Projects')}
                    {navLink('/contact', 'Contact me')}
                </Nav> 
                <Nav>
                <SocialMediaLinks/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}
export default Header



