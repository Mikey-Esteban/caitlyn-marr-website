import { useState, useEffect, useRef } from 'react'

import './App.css';
import styled from 'styled-components';
import { useOnClickOutside } from "./hooks";

import {
  Navbar,
  Burger,
  Menu,
  Welcome,
  Landing,
  About,
  Resume,
  Gallery,
  Media,
  Contact,
  Instagram,
  Carousel,
  Footer
} from './components'

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 400px;

  display: flex;
  flex-direction: column;

  .footer {
    flex-shrink: 0;
  }
`

const MobileNavbar = styled.div`
  margin: 0 50px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleWrapper = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: .1rem;
`

function App() {
  const node = useRef();

  // usestate
  const [isMobile, setIsMobile ] = useState()
  // useState for active navbar
  const [activeTab, setActiveTab] = useState({
    'about': false,
    'resume': false,
    'gallery': false,
    'media': false,
    'contact': false,
    'instagram': false
  })
  // useState for mobile navbar
  const [ isBurgerNavbar, setIsBurgerNavbar ] = useState()
  const [open, setOpen] = useState(false);

  // listener to close burger menu when clicking
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    const reportWindowSize = () => window.innerWidth

    const willChangeToMobile = () => {
      console.log('REPORTING WINDOW SIZE', reportWindowSize());
      reportWindowSize() <= 480 ? setIsMobile(true) : setIsMobile(false)
    }

    const willChangeToBurger = () => {
      reportWindowSize() <= 680 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
    }

    willChangeToMobile()
    willChangeToBurger()

    window.addEventListener('resize', willChangeToMobile)
    window.addEventListener('resize', willChangeToBurger)
  })


  // decide which navbar
  const renderNavbar = () => {
    if (isBurgerNavbar) {
      return (
        <MobileNavbar ref={node}>
          <TitleWrapper>
            CAITLYN MARR
          </TitleWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </MobileNavbar>
      );
    } else {
      return (
        <Navbar isMobile={isMobile} activeTab={activeTab} />
      );
    }
  };

  return (
      <Wrapper>
        {renderNavbar()}
        <Welcome />
        <About isMobile={isMobile} />
        <Resume />
        <Gallery isMobile={isMobile} />
        <Media />
        <Contact />
        <Instagram />
        <div className="footer">
          <Footer />
        </div>
      </Wrapper>
  );
}

export default App;
