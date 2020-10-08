import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SocialMediaLinks from './SocialMediaLinks'

const footerStyle = {
    backgroundColor: '#a2d3f0',
    color: 'white',
    width: '100%', 
    height: '50px',
    padding: '0px 50px',
}
const contactStyle= {
    margin: 0,
    color: 'black',
    fontSize: '14px',
    verticalAlign: 'middle', 
    padding: '9px 12px',
}

function Footer(){

    return (
        <Navbar style={footerStyle} expand="sm">
            <Nav className="mr-auto">
                <p style={contactStyle}> jpcommissaris@gmail.com  &nbsp; &nbsp; 650-867-8425   </p>
            </Nav>
            <Nav>
                <SocialMediaLinks/>
            </Nav>
            
        </Navbar>
    )
}

export default Footer
// link to icons https://fontawesome.com/icons?d=gallery&q=github