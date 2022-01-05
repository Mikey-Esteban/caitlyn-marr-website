import React from 'react'
import styled from 'styled-components'

import Form from '../Form/Form'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Contact = () => {
  return (
    <Wrapper>
      <Form></Form>
    </Wrapper>
  )
}

export default Contact
