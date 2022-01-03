import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

const Wrapper = styled.div`
  z-index: 2;
  margin: 0 50px;

  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`

const Button = styled.button`
  color: ${props => props.active && '#f08e80 !important'};
  font-weight: ${props => props.active && '400 !important'};
`

const TitleWrapper = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: .1rem;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 300;

    /* Set up the hover */
    /* If you aren't using autoprefix, remember to prefix the gradient for other browsers */
    background-image: linear-gradient(white, white);
    background-size: 0 1px, auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    transition: all .2s ease-out;
  }

  button:hover {
    /* The following line makes the underline only as wide as the text */
    /* background-size: calc(100% - 2em) 5px, auto; */
    background-size: calc(100% - 1em) 1px, auto;
  }
`


const Navbar = ({isMobile, activeTab}) => {

  return (
    <Wrapper>
      <TitleWrapper>
        CAITLYN MARR
      </TitleWrapper>
      <LinksWrapper>
        <Button active={activeTab['about']} >About</Button>
        <Button active={activeTab['resume']} >Resume</Button>
        <Button active={activeTab['gallery']} >Gallery</Button>
        <Button active={activeTab['media']} >Media</Button>
        <Button active={activeTab['contact']} >Contact</Button>
        <Instagram
          size={20}
          onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}
          style={{color: 'white', cursor: 'pointer' }}
        />
      </LinksWrapper>
    </Wrapper>
  )
}

export default Navbar
