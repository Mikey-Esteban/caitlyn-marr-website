import { useState, useEffect, useRef } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import styled from 'styled-components';
import { useOnClickOutside } from "./hooks";

import {
  Navbar,
  Burger,
  Menu,
  Landing,
  About,
  Resume,
  Gallery,
  Media,
  Contact,
  Carousel,
  Footer
} from './components'

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 400px;

  display: flex;
  flex-direction: column;

  .body {
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }
  .footer {
    flex-shrink: 0;
  }

  @media only screen and (max-width: 600px) {
    .body {
      align-items: center;
    }
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
      reportWindowSize() <= 480 ? setIsMobile(true) : setIsMobile(false)
    }

    const willChangeToBurger = () => {
      reportWindowSize() <= 600 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
    }

    willChangeToMobile()
    willChangeToBurger()

    window.addEventListener('resize', willChangeToMobile)
    window.addEventListener('resize', willChangeToBurger)
  })

  // function that returns function ..uses useNavigate
  const handleRedirect = (link, func) => () => {
    console.log('redirect is called');
    const stripped = link.substring(1)
    // reset active tab
    const newActiveTab = {...activeTab}
    for (const tab in newActiveTab) {
      newActiveTab[tab] = false
    }
    // make link new active table
    newActiveTab[stripped] = true
    // set newActiveTab
    setActiveTab(newActiveTab)

    func(link)
  }

  // decide which navbar
  const renderNavbar = () => {
    if (isBurgerNavbar) {
      return (
        <MobileNavbar ref={node}>
          <TitleWrapper>
            CAITLYN MARR
          </TitleWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} redirect={handleRedirect} />
        </MobileNavbar>
      );
    } else {
      return (
        <Navbar redirect={handleRedirect} isMobile={isMobile} activeTab={activeTab} />
      );
    }
  };

  return (
    <Router>
      <Wrapper>
        {renderNavbar()}
        <div className="body">
          <Routes>
            <Route exact path ='/' element={<Landing redirect={handleRedirect} isMobile={isMobile} />} />
            <Route exact path ='/about' element={<About redirect={handleRedirect} isMobile={isMobile} />} />
            <Route exact path ='/resume' element={<Resume redirect={handleRedirect} />} />
            <Route exact path ='/gallery' element={<Gallery redirect={handleRedirect} isMobile={isMobile} />} />
            <Route exact path ='/media' element={<Media redirect={handleRedirect} isMobile={isMobile} />} />
            <Route exact path ='/contact' element={<Contact redirect={handleRedirect} isMobile={isMobile} />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
