import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useRouter} from 'next/router'

const namestyle = {
    fontSize: '56px',
    lineHeight: '64px',
    marginBottom: '0px',
    fontWeight: 'bold',
    fontFamily: 'arial, serif'
}
const bodystyle = {
    fontSize: '24px',
    margin: '6px 0px 2px 0px',
    lineHeight: '24px',
    fontFamily: 'open sans'
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
    const router = useRouter()


    return (
        <React.Fragment >
            <Container style={containerstyle}>
                <p style={namestyle}>Julian</p> 
                <p style={namestyle}>Commissaris</p> 
                <p style={bodystyle}>UCSB student and aspiring software developer</p> 
                <hr style={hrstyle} size='30'/>
                <Button variant='outline-primary' onClick={() => router.push('/contact')}>Contact Me</Button>
                
            </Container>
        </React.Fragment>
    )
}
export default HomeGreeting