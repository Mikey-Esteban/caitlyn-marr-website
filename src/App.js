import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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
  Mosaic,
  Images,
  Gallery,
  Media,
  ResumeContact,
  Instagram,
  Footer
} from './components'

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 400px;

  display: flex;
  flex-direction: column;
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

const ResumeContactWrapper = styled.div`
  display: flex;
`

function App() {
  // node for menu burger
  const node = useRef();
  // access token for instagram api
  const access_token = process.env['REACT_APP_INSTAGRAM_ACCESS_TOKEN']

  // useState for instagram gird
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ instaGrid, setInstaGrid ] = useState()
  const [isMobile, setIsMobile ] = useState()
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
  // useState for mosaic
  const [ isMosaic, setIsMosaic ] = useState()

  // listener to close burger menu when clicking
  useOnClickOutside(node, () => setOpen(false));
  // function to change to mobile
  const willChangeToMobile = () => window.innerWidth <= 480 ? setIsMobile(true) : setIsMobile(false)
  // function to change to burger menu
  const willChangeToBurger = () => window.innerWidth <= 680 ? setIsBurgerNavbar(true) : setIsBurgerNavbar(false)
  // functino to change mosaic
  const willChangeToMosaic = () => window.innerWidth >= 480 ? setIsMosaic(true) : setIsMosaic(false)

  useEffect(() => {
    // initialize if mobile and if burger
    willChangeToMobile()
    willChangeToBurger()
    // initialize if mosaic
    willChangeToMosaic()

    window.addEventListener('resize', willChangeToMobile)
    window.addEventListener('resize', willChangeToBurger)
    window.addEventListener('resize', willChangeToMosaic)

    // hit my rails instgram api
    axios.get(`http://127.0.0.1:3000/api/v1/get_last_nine`)
      .then(resp => {
        console.log(resp);
        setInstaGrid(resp.data)
        setIsLoaded(true)
      })

    // hit my rails instagram api
    axios.get(`http://127.0.0.1:3000/api/v1/last_accessed`)
      .then(resp => {
        const last_accessed = resp.data.last_accessed
        // calculate hours diff
        let hours_diff = Math.abs(Date.now() - Date.parse(last_accessed)) / 3600000
        // if greater than 1, post request to create another access object
        if (hours_diff >= 1) {
          // create new access instance
          const access = { last_accessed: Date.now() }
          axios.post(`http://127.0.0.1:3000/api/v1/accesses`, {access})
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
          // hit instagram api
          axios.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`)
            .then(resp => {
              console.log(resp);
              // grab most recent
              const mostRecent = resp.data.data[0]
              // grab latest rails api instagram post
              axios.get(`http://127.0.0.1:3000/api/v1/get_most_recent`)
                .then(resp => {
                  console.log(resp);
                  const latestPost = resp.data
                  // check to see if ids are the same
                  console.log('ID SAME?', mostRecent.id === latestPost.media_id);

                  /////////////
                  // BIG TO DO LIST
                  // get all user media
                  // filter whatever isnt already in rails instagram api
                  // add each to rails instagram api
                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        }
      })
      .catch(error => console.log(error))
  }, [])


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
        { isMosaic ? <Mosaic /> : <Images />}
        <Media />
        <ResumeContact />
        {isLoaded && <Instagram grid={instaGrid} />}
        <Footer />
      </Wrapper>
  );
}

export default App;
