import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

const Wrapper = styled.div`
  position: fixed;
  width: 98%;
  padding-right: 2%;
  z-index: 2;

  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background ease-in-out 150ms;
  background: ${props => props.addNavbarBG ? 'rgba(0, 0, 0, .5)' : 'none'};

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


const Navbar = ({isMobile, addNavbarBG}) => {

  const handleClick = selector => {
    let element = document.querySelector(`#${selector}`)
    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Wrapper addNavbarBG={addNavbarBG}>
      <TitleWrapper onClick={() => handleClick('welcome')}>
        CAITLYN MARR
      </TitleWrapper>
      <LinksWrapper>
        <Button onClick={() => handleClick('about')}>About</Button>
        <Button onClick={() => handleClick('mosaic')} >Gallery</Button>
        <Button onClick={() => handleClick('media')}>Media</Button>
        <Button onClick={() => handleClick('resume')}>Resume</Button>
        <Button onClick={() => handleClick('contact')}>Contact</Button>
        <Instagram
          size={20}
          onClick={() => handleClick('instagram')}
          style={{color: 'white', cursor: 'pointer' }}
        />
      </LinksWrapper>
    </Wrapper>
  )
}

export default Navbar
