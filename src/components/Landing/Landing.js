import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../Button/Button'
import Image from '../Image/Image'
import Instagram from '../Instagram/Instagram'

const Wrapper = styled.div`
  margin: 0 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const CTAWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const TitleWrapper = styled.h1`
  margin: 20px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: .1rem;

  @media only screen and (max-width: 480px) {
    margin: 0 auto;
    margin-bottom: 5px;
  }
`

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

const Landing = ({redirect, isMobile}) => {
  let navigate = useNavigate()


  return (
    <Wrapper>
      <Instagram />
      { isMobile ?
        <MobileWrapper>
          <TitleWrapper>ACTOR</TitleWrapper>
          <Image src="https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619206921921-PP0I5RCVLAMAU4PJ744F/Caitlyn276_.jpg?format=750w" alt="Caitlyn in black, closed smile" />
          <Button text='ENTER' handleClick={redirect('/about', navigate)}/>
        </MobileWrapper> :
        <Fragment>
          <Image src="https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619206921921-PP0I5RCVLAMAU4PJ744F/Caitlyn276_.jpg?format=750w" alt="Caitlyn in black, closed smile" />
          <CTAWrapper>
            <TitleWrapper>ACTOR</TitleWrapper>
            <Button text='ENTER' handleClick={redirect('/about', navigate)}/>
          </CTAWrapper>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Landing
