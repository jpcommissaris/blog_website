import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const circle = {
    position: 'absolute',
    height: '250px',
    width: '250px',
    backgroundColor: 'white',
    borderRadius: '50%',
    top: '25px',
    right: '120px',
}
const image = {
    position: 'absolute',
    height: '320px',
    width: 'auto',
    backgroundColor: 'none',
    bottom: '0px',
    right: '70px', 
}
const containerstyle = {

}

const HomeImage = () => {
    return (
        <React.Fragment >
            <Container style={containerstyle}>
                <div style={circle}></div>
                <Image style={image} src="static/portrait.jpeg" />
                
            </Container>
        </React.Fragment>
    )
}
export default HomeImage