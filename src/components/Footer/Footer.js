import React from 'react'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100vh;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  background-color: #534f4b;
  color: white;
  font-size: .8rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 1rem;
    justify-content: flex-start;
    gap: 1rem;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <p>caitlynmarr22@gmail.com</p>
      <Instagram
        size={20}
        onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}
        style={{color: 'white', cursor: 'pointer' }}
      />
    </Wrapper>
  )
}

export default Footer
