import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const namestyle = {
    fontSize: '32px',
    marginBottom: '0px',
    fontWeight: 'bold'
}
const bodystyle = {
    fontSize: '16px',
    margin: '6px 0px 2px 0px',
    lineHeight: '20px'
}

const containerstyle = {
    width: '300px',
    margin: '67px 0px 100px 70px'
}

const hrstyle = {
    backgroundColor: 'limegreen',
    height: '6px',
    width: '20px',
    margin: '24px 0px 16px 0px'
}


const HomeGreeting = () => {
    return (
        <React.Fragment >
            <Container style={containerstyle}>
                <p style={namestyle}>Julian</p> 
                <p style={namestyle}>Commissaris</p> 
                <p style={bodystyle}>UCSB student and aspiring software developer</p> 
                <hr style={hrstyle} size='30'/>
                <Button variant='outline-primary'>Contact Me</Button>
                
            </Container>
        </React.Fragment>
    )
}
export default HomeGreeting