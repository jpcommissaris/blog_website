import HomeGreeting from '../components/home/HomeGreeting'
import HomeImage from '../components/home/HomeImage'
import NavCardDeck from '../components/home/NavCardDeck'
import Layout from '../components/layout/Layout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const index = () => {
    return(
        <Layout>
            <Container fluid style={{backgroundColor: '#edf6f7'}}>
                <Row>
                    <Col md={6} >
                        <HomeGreeting/>
                    </Col>
                    <Col md={6} >
                        <HomeImage/>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundColor: 'white'}}>
                <Row>   
                    <Col md={12}>
                        <NavCardDeck/>
                    </Col>
                </Row>
            </Container>
        </Layout>   
    )
}

export default index;