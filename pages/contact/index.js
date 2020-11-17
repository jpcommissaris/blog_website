import Layout from '../../components/layout/Layout'
import ContactForm from '../../components/contact/ContactForm'
import Container from 'react-bootstrap/Container'

const containerstyle = {
    padding: '35px 0px'
}

const contact = () => {
    return (
        <Layout>
            <Container fluid style={containerstyle}>
                <ContactForm />
            </Container>
        </Layout>   
    )
}

export default contact;