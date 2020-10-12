import React, { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const circle = {
    backgroundColor: 'orange',
    height: '32px',
    width: '40px',
    borderRadius: '50%',
    margin: '20  px 0px 0px 30px'
}
const iconstyle= {
    fontSize: '18px',
    position: 'relative',
    backgroundColor: 'orange',
    top: '5px',
    left: '9px',
    textAlign: 'center',
    color: 'black'
}
const header = {
    padding: '8px 40px'
}

const inputstyle= {
    color: 'black',
    display: 'table',
    width: '150px',
    margin: 'auto',
    marginTop: '10px'
}

function ContactForm(props) {

    const [email, setEmail] = useState(''); 
    const [name, setName] = useState('') 
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const [message, setMessage] = useState({type: '', content: ''})

    const sendFormAsEmail = () => {
        if(name==''){
            setMessage({type: 'warning', content: 'name is required'}) 
            return false
        }else if(email==''){
            setMessage({type: 'warning', content: 'email is required'}) 
        }else{
            setName('')
            setEmail('')
            setSubject('')
            setBody('')
            setMessage({type: 'success', content: 'sent as an email'})
        }
    }

    const showMessage = () => {
        if(message.content){
            return (
                <Alert variant={message.type}>
                    <p style={{margin: '0px'}}>{message.content}</p>
                </Alert>
            )
        }
    }

    const handleChangeToForm = (event, type) => {
        let value = event.target.value
        if(type=='email'){
            setEmail(value)
        }else if(type=='name'){
            setName(value)
        }else if(type=='subject'){
            setSubject(value)
        }else if(type=='body'){
            setBody(value)
        }
        setMessage({type: '', content: ''})
    }

    

    return (
        <React.Fragment>
        
        <div className='form-wrapper' >
            <Form className= 'shadow' style={{backgroundColor: 'white'}}>
                <Row style={{ margin: '0px', backgroundColor: '#b2e8a2',}}>
                    <Col sm={10}>
                        <h1 style={header}> Contact Me </h1> 
                    </Col>
                    <Col sm={2} >
                        <div style={circle}>
                            <FontAwesomeIcon style={iconstyle} icon={faPaperPlane}/>
                        </div>
                    </Col>
                </Row>
            
            <div style={{padding: '20px'}}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}> Your Name </Form.Label>
                    <Col sm={12}>
                        <Form.Control value={name} onChange={(event) => handleChangeToForm(event, 'name')}/>
                    </Col>

                    <Form.Label column sm={3}> Your Email </Form.Label>
                    <Col sm={12}>
                        <Form.Control type='email' value={email} onChange={(event) => handleChangeToForm(event, 'email')}/>
                    </Col>

                    <Form.Label column sm={3}> Subject </Form.Label>
                    <Col sm={12}>
                        <Form.Control value={subject} onChange={(event) => handleChangeToForm(event, 'subject')}/>
                    </Col>
                    
                    <Form.Label column sm={3}> Body </Form.Label>
                    <Col sm={12}>
                        <Form.Control value={body} as='textarea' style={{minHeight: '200px'}} onChange={(event) => handleChangeToForm(event, 'body')}/>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} >
                        <Col sm={12}>
                            {showMessage()}
                        </Col>
                        <Col sm={12} >
                            <Button className='form-submit' onClick={() => sendFormAsEmail()} style={inputstyle} > Send </Button>
                        </Col>
                </Form.Group>
            </div>
            </Form>  
        </div>
        </React.Fragment>
    )

} export default ContactForm