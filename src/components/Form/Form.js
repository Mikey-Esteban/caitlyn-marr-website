import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

import { Profile } from '@styled-icons/icomoon/Profile'
import { PhoneFill } from '@styled-icons/bootstrap/PhoneFill'
import { Email } from '@styled-icons/material/Email'

import Button from '../Button'

const StyledForm = styled.form`
  position: relative; /* for success message positioning */
  padding: 0 1rem;
  font-size: .8rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .1rem;
  }

  label {
    margin: .3rem 0;
  }

  .slidein {
    position: absolute;
    animation-duration: 900ms;
    animation-name: slidein;
    font-size: 13px;

    @keyframes slidein {
      0% {
        left: -50rem;
      }

      40% {
        left: 1rem;
      }

      60% {
        left: -1rem;
      }

      100% {
        left: 0;
      }
    }
  }
`
const SuccessMessageWrapper = styled.div`
  background: #d0fbce;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px;

`
const FieldWrapper = styled.div`
  position: relative; /* for error wrapper positioning */
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  display: flex;
  gap: 5px;

  input, textarea {
    width: 100%;
    border: 2px solid #f1f1f1;
    border-radius: 2px;
    padding: 5px;

    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  input:focus, textarea:focus {
    outline: none;
    border: 2px solid black;
  }
`
const ErrorWrapper = styled.div`
  position: absolute;
  bottom: -1.5rem;


  padding: 8px;
  color: #d70014;
  font-size: .7rem;
  font-weight: 400;
  letter-spacing: .05rem;
`

const HRWrapper = styled.div`
  margin: 3rem 0 2rem 0;
`

const Form = () => {
  const form = useRef();

  const [ messageData, setMessageData ] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null
  })

  const [ successMessage, setSuccessMessage ] = useState()
  const [ formError, setFormError ] = useState()
  const [ firstNameError, setFirstNameError ] = useState()
  const [ emailError, setEmailError ] = useState()
  const [ messageError, setMessageError ] = useState()

  const resetInputValues = () => {
    setMessageData({
      firstName: null,
      lastName: null,
      email: null,
      message: null
    })
  }

  const handleValidations = () => {
    // always reset errors
    setFirstNameError()
    setEmailError()
    setMessageError()
    setFormError()

    let isError = false
    let checkers = [
      {type: 'Name', value: messageData.firstName, setter: setFirstNameError },
      {type: 'Email', value: messageData.email, setter: setEmailError },
      {type: 'Message', value: messageData.message, setter: setMessageError },
    ]

    if (!validateEmail(messageData.email)) {
      setEmailError('Email is not valid. Email addresses should follow the format user@domain.com.')
      isError = true
    }

    for ( let check in checkers ) {
      if (!validateNotEmpty(checkers[check].value)) {
        checkers[check].setter(`${checkers[check].type} is required.`)
        isError = true
      }
    }

    if (isError) {
      setFormError("Oops! I couldn't receive your message :/")
      return false
    } else {
      setSuccessMessage("Thanks for your message! I will get back to you shortly :)")
      setTimeout(() => setSuccessMessage(), 5000)
      resetInputValues()
    }
    return true
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (handleValidations()) {
      sendEmail()
    }
  }

  const handleInputChange = e => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value })
  }

  // email validation
  const validateEmail = email => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // empty validate
  const validateNotEmpty = str => {
    if (!str) { return false }
    return str.length !== 0;
  };

  const sendEmail = () => {
    console.log(form.current)
    emailjs.sendForm('contact_service', 'contact_form', form.current, 'user_66gmO7LoQfvP4XghZH8zG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <StyledForm ref={form} onSubmit={handleSubmit}>
      <h1>Say Hi!</h1>
      {successMessage && <SuccessMessageWrapper className="slidein">{successMessage}</SuccessMessageWrapper>}
      <FieldWrapper>
        <label htmlFor="name">Name *</label>
        <InputWrapper>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={handleInputChange}
            value={messageData.firstName || ''}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={handleInputChange}
            value={messageData.lastName || ''}
          />
        </InputWrapper>
        {firstNameError && <ErrorWrapper><p>Name is required.</p></ErrorWrapper>}
      </FieldWrapper>

      <FieldWrapper>
        <label htmlFor="name">Email *</label>
        <InputWrapper>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            value={messageData.email || ''}
          />
        </InputWrapper>
        {emailError && <ErrorWrapper><p>{emailError}</p></ErrorWrapper>}
      </FieldWrapper>

      <FieldWrapper>
        <label htmlFor="name">Message *</label>
        <InputWrapper>
          <textarea
            type="text"
            rows="6"
            placeholder="What would you like to know?!"
            name="message"
            onChange={handleInputChange}
            value={messageData.message || ''}
          />
        </InputWrapper>
        {messageError && <ErrorWrapper><p>Message is required.</p></ErrorWrapper>}
      </FieldWrapper>

      <FieldWrapper>
        {formError && <ErrorWrapper><p>{formError}</p></ErrorWrapper>}
        <Button text={'Send'} handleClick={() => console.log('....uhhh')}  />
      </FieldWrapper>

      <HRWrapper><hr/></HRWrapper>
    </StyledForm>
  )
}

export default Form
