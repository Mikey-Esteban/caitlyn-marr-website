import React from 'react'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

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

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  align-items: flex-start;
`

const Footer = () => {
  return (
    <Wrapper>
      <CTAWrapper>
        <p>caitlynmarr22@gmail.com</p>
        <p>(305) 775 2428</p>
        <Instagram
          size={20}
          onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}
          style={{color: 'white', cursor: 'pointer' }}
        />
      </CTAWrapper>
    </Wrapper>
  )
}

export default Footer
