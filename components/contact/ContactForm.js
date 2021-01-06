import React, { useState, useEffect, useRef } from "react"
import {sendMail} from '../../actions/contact'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

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
        }else if(email==''){
            setMessage({type: 'warning', content: 'email is required'}) 
        }else{
            sendMail({name, email, subject, body}).then(({error, info}) => {
                if(error){
                    setMessage({type: 'danger', content: 'error sending email'})
                }else{
                    setName('')
                    setEmail('')
                    setSubject('')
                    setBody('')
                    setMessage({type: 'success', content: 'sent as an email'})
                }
            })
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
            <Form  className='form-wrapper'>
                <p className='h2 mb-0' style={{paddingLeft: '20px'}}>
                Contact Me
                </p>  
            
            
            
            <div style={{padding: '20px'}}>
                <Form.Group as={Row}>
                    <Col md={6}>
                    <Form.Label > Your Name </Form.Label>
                    <Form.Control value={name} onChange={(event) => handleChangeToForm(event, 'name')}/>
                    </Col>

                    
                    <Col md={6}>
                        <Form.Label > Your Email </Form.Label>
                        <Form.Control type='email' value={email} onChange={(event) => handleChangeToForm(event, 'email')}/>
                    </Col>  



                    <Form.Label column sm={3}> Subject </Form.Label>
                    <Col md={12}>
                        <Form.Control value={subject} onChange={(event) => handleChangeToForm(event, 'subject')}/>
                    </Col>
                    
                    <Form.Label column sm={3}> Body </Form.Label>
                    <Col md={12}>
                        <Form.Control value={body} as='textarea' style={{minHeight: '200px'}} onChange={(event) => handleChangeToForm(event, 'body')}/>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} >
                        <Col md={12}>
                            {showMessage()}
                        </Col>
                        <Col md={12} >
                            <Button className='form-submit' onClick={() => sendFormAsEmail()} style={inputstyle} > Send </Button>
                        </Col>
                </Form.Group>
            </div>
            
            </Form>  
    )

} export default ContactForm