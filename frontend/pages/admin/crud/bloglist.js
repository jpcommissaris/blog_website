import ListBlogs from '../../../components/crud/ListBlogs'
import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const bloglist = () => {
    return(
        <Layout>
            <Admin>
                <Container fluid>
                    <Row> 
                        <Col md='12'>
                            <h2>Update or delete a blog</h2> 
                            <ListBlogs />
                        </Col>
                    </Row>
                </Container>
            </Admin> 
        </Layout>   
    )
}
export default bloglist

