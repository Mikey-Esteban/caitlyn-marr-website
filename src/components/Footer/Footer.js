import React from 'react'
import { Email } from '@styled-icons/material-outlined/Email'
import { Phone } from '@styled-icons/bootstrap/Phone'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 140px;

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

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <CTAWrapper>
        <div className="info">
          <Email size={20} />
          <p>caitlynmarr22@gmail.com</p>
        </div>
        <div className="info">
          <Phone size={20}/>
          <p>(305) 775 2428</p>
        </div>
        <div className="info">
          <Instagram
            size={20}
            onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}
            style={{color: 'white', cursor: 'pointer' }}
          />
          <p>caitlynmarr22</p>
        </div>
      </CTAWrapper>
    </Wrapper>
  )
}

export default Footer
