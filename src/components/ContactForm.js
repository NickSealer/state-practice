import React, { useState } from 'react'
import { MessageSent } from '../components/MessageSent'

export const ContactForm = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')
  let [notify, setNotify] = useState(null)

  const style = {
    display: 'inline-block',
    width: '700px',
    marginTop: '70px',
    border: '1px black solid',
    padding: '40px',
    borderRadius: '15px'
  }

  function handleName(value) {
    setName(value)
  }

  function handleEmail(value) {
    setEmail(value)
  }

  function handleMessage(value) {
    setMessage(value)
  }

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.length > 20 && name.length > 0 && email.length > 0) {
      setNotify(`Hi ${name}, your message: "${message}" has been sent to: ${email}`)
      document.getElementById('notify').style.display = 'block'
    } else {
      setNotify('PLEASE WRITE A REAL MESSAGE!!!')
      document.getElementById('notify').style.display = 'block'
    }
  }

  return (
    <div style={style}>
      <MessageSent message={notify} />
      <form method='post' onSubmit={e => sendMessage(e)} id='contact-form'>
        <div className='row'>
          <div className='col-6'>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
              <input onChange={e => handleName(e.target.value)} type="text" className="form-control" id="name" name='contact[name]' placeholder="Your name here" required='required' />
            </div>
          </div>
          <div className='col-6'>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input onChange={e => handleEmail(e.target.value)} type="email" className="form-control" id="email" name='contact[email]' placeholder="name@example.com" required='required' />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea onChange={e => handleMessage(e.target.value)} className="form-control" id="exampleFormControlTextarea1" name='contact[message]' rows="3" required='required'></textarea>
        </div>
        <button type="sudmit" className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}
