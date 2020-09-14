import React,{ useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

const ContactForm = () => { 
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [result, setResult] =useState(null)

  const sendEmail = event => {
    event.preventDefault()
    axios
    .post('/send', {...state})
    .then(response => {
      setResult(response.data)
      setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    })
    .catch(() => {
      setResult({success: false, message:"Something went wrong. Try again later."})
    })
  }

  const onInputChange = event => {
    const {name, value} = event.target

    setState({
      ...state,
      [name]: value
    })
  }

  return(
    <div>
      {result && (<p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>)}
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={state.name} 
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={state.email} 
            placeholder="Enter your email address"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control 
            type="text" 
            name="subject" 
            value={state.subject} 
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            type="textarea" 
            name="message" 
            value={state.message} 
            placeholder="Enter message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>Submit</Button>
      </form>
    </div>
  )
}

export default ContactForm