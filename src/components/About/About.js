import React, { useState, useEffect, Fragment } from 'react'

import styled from 'styled-components'

import Button from '../Button/Button'
import Image from '../Image/Image'

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 0;
  margin: 0 50px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  ${'' /* @media only screen and (max-width: 625px) {
    flex-direction: column;
    gap: 1rem;
  } */}

  @media only screen and (max-width: 625px) {
    /* change display value to float image */
    display: block;
  }
`

const CTAWrapper = styled.div`
  width: 50%;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: 1000px) {
    /* change display value to float image */
    width: 30%;
  }
`

const TitleWrapper = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: .1rem;
`

const InfoWrapper = styled.div`
  p {
    font-size: .8rem;
    letter-spacing: .05rem;
    line-height: 1.2rem;
    word-spacing: .1rem;
    margin: 10px 0;
  }
`

const MediumMobileWrapper = styled.div`
  @media only screen and (min-width: 480px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
`

const About = ({isMobile}) => {

  const [ isMedium, setIsMedium ] = useState()
  const [ isLarge, setIsLarge ] = useState()

  useEffect(() => {
    const reportWindowSize = () => window.innerWidth

    const handleChangeSize = () => {
      let size = reportWindowSize()
      console.log('HIHIHI', size)
      if (size < 480) {
        setIsMedium(false)
        setIsLarge(false)
      }
      else if (size >= 480 && size < 625) {
        setIsMedium(true)
        setIsLarge(false)
      } else if (size > 625) {
        setIsMedium(false)
        setIsLarge(true)
      }
      console.log(size)
    }

    handleChangeSize()

    window.addEventListener('resize', handleChangeSize)
  }, [])


  return (
    <Wrapper id="about">
      { (isMobile || isMedium) &&
        <MediumMobileWrapper>
          <Image
            src={'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619134613548-SO8CDAJT1C1M4CARD7LC/Caitlyn126.jpg?format=750w'}
            src={'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619206921921-PP0I5RCVLAMAU4PJ744F/Caitlyn276_.jpg?format=500w'}
            alt={'Caitlyn in black, closed smile'}
            aboutImage={true}
          />
          <TitleWrapper>Welcome!</TitleWrapper>
          <InfoWrapper>
            <p>I’m Caitlyn Marr, (she/her) an actress living in NYC. I grew up in Miami,
            Florida and got my start playing “Extra Orphan” as a first grader in Annie because
            the musical director was struck by my overwhelming enthusiasm. I mainly picked up
            mops and buckets, but the acting bug stuck. My enthusiasm hasn’t waned since.</p>

            <p>I always feel most myself when collaborating with creative people and feeling inspired by their work. </p>

            <p>Please take a look around my website and always feel free to reach out! </p>
          </InfoWrapper>
          <Button text='Contact' handleClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=caitlynmarr22@gmail.com')}/>
        </MediumMobileWrapper>
      }
      { isLarge &&
        <Fragment>
          <CTAWrapper>
            <InfoWrapper>
              <TitleWrapper>Welcome!</TitleWrapper>
              <p>I’m Caitlyn Marr, (she/her) an actress living in NYC. I grew up in Miami,
              Florida and got my start playing “Extra Orphan” as a first grader in Annie because
              the musical director was struck by my overwhelming enthusiasm. I mainly picked up
              mops and buckets, but the acting bug stuck. My enthusiasm hasn’t waned since.</p>

              <p>I always feel most myself when collaborating with creative people and feeling inspired by their work. </p>

              <p>Please take a look around my website and always feel free to reach out! </p>
            </InfoWrapper>
            <Button text='Contact' handleClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=caitlynmarr22@gmail.com')}/>
          </CTAWrapper>
          <ImageWrapper>
            <Image
              src={'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619134613548-SO8CDAJT1C1M4CARD7LC/Caitlyn126.jpg?format=750w'}
              src={'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619206921921-PP0I5RCVLAMAU4PJ744F/Caitlyn276_.jpg?format=500w'}
              alt={'Caitlyn in blue, open smile'}
              aboutImage={true}
            />
          </ImageWrapper>
        </Fragment>
      }
    </Wrapper>
  )
}

export default About
