import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import UpdateBlog from '../../../components/crud/UpdateBlog'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const blog = () => {
    return(
        <Layout>
            <Admin>
                <Container fluid>
                    <Row> 
                        <Col md='12'>
                            <h2>Create a new blog</h2> 
                            <UpdateBlog />
                        </Col>
                    </Row>
                </Container>
            </Admin> 
        </Layout>   
    )
}

export default blog;