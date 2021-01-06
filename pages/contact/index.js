import Layout from '../../components/layout/Layout'
import ContactForm from '../../components/contact/ContactForm'
import Container from 'react-bootstrap/Container'
import MetaData from '../../components/layout/MetaData'

const containerstyle = {
    padding: '35px 0px'
}

const contact = () => (
    <Layout>
        <MetaData title='Contact Julian Commissaris' description={blog.description} />  
        <Container fluid style={containerstyle}>
            <ContactForm />
        </Container>
    </Layout>   
)

export default contact;