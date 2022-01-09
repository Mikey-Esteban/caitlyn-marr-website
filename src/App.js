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

const localHost = 'http://127.0.0.1:3000/api/v1'
const heroku = 'https://aqueous-beach-38647.herokuapp.com/api/v1'
const apiMode = heroku


function App() {
  // node for menu burger
  const node = useRef();
  // access token for instagram api
  const access_token = process.env['REACT_APP_INSTAGRAM_ACCESS_TOKEN']

  // useState for instagram gird
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ instaGrid, setInstaGrid ] = useState()
  const [isMobile, setIsMobile ] = useState()
  // useState for navbar background
  const [ addNavbarBG, setAddNavbarBG ] = useState()
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
  // function to change mosaic
  const willChangeToMosaic = () => window.innerWidth >= 625 ? setIsMosaic(true) : setIsMosaic(false)
  // function to add background to navbar
  const willAddNavbarBG = () => {
    console.log('will add navbar', window.scrollY);
    let scrollPos = window.scrollY
    let viewHeight = window.innerHeight

    scrollPos <= viewHeight ? setAddNavbarBG(false) : setAddNavbarBG(true) ;
  }

  useEffect(() => {
    // initialize if mobile and if burger
    willChangeToMobile()
    willChangeToBurger()
    // initialize if mosaic
    willChangeToMosaic()

    window.addEventListener('resize', willChangeToMobile)
    window.addEventListener('resize', willChangeToBurger)
    window.addEventListener('resize', willChangeToMosaic)
    window.addEventListener('scroll', willAddNavbarBG)

    // hit my rails instgram api
    axios.get(`${apiMode}/get_last_nine`)
      .then(resp => {
        console.log(resp);
        setInstaGrid(resp.data)
        setIsLoaded(true)
      })
      .catch(error => console.log(`${apiMode}/get_last_nine ERROR`, error))

    // hit my rails instagram api
    axios.get(`${apiMode}/last_accessed`)
      .then(resp => {
        const last_accessed = resp.data.last_accessed
        // calculate hours diff
        let hours_diff = Math.abs(Date.now() - Date.parse(last_accessed)) / 3600000
        // if greater than 1, post request to create another access object
        if (hours_diff >= 1) {
          // create new access instance
          const access = { last_accessed: Date.now() }
          axios.post(`${apiMode}/accesses`, {access})
            .then(resp => console.log(resp))
            .catch(error => console.log(`${apiMode}/accesses ERROR`, error))
          // hit instagram api
          axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${access_token}`)
            .then(resp => {
              console.log(resp);
              // grab most recent
              const mostRecent = resp.data.data[0]
              console.log('CHECK ME OUT', mostRecent);
              // grab latest rails api instagram post
              axios.get(`${apiMode}/get_most_recent`)
                .then(resp => {
                  console.log(resp);
                  const latestPost = resp.data
                  // check to see if ids are the same
                  if (mostRecent.id !== latestPost.media_id) {
                    // create new post
                    axios.post(`${apiMode}/media`, mostRecent)
                      .then(resp => console.log(resp))
                      .catch(error => console.log(`${apiMode}/media ERROR`, error))
                  }

                  /////////////
                  // BIG TO DO LIST
                  // get all user media
                  // filter whatever isnt already in rails instagram api
                  // add each to rails instagram api
                })
                .catch(error => console.log(`${apiMode}/get_most_recent ERROR`, error))
            })
            .catch(error => console.log(`instagram basic display media query error`, error))
        }
      })
      .catch(error => console.log(`${apiMode}/last_accessed`, error))
  }, [])


  // decide which navbar
  const renderNavbar = () => {
    if (isBurgerNavbar) {
      return (
        <MobileNavbar ref={node}>
          <TitleWrapper>
            CAITLYN MARR
          </TitleWrapper>
          <Burger open={open} setOpen={setOpen} addNavbarBG={addNavbarBG} />
          <Menu open={open} setOpen={setOpen} />
        </MobileNavbar>
      );
    } else {
      return (
        <Navbar isMobile={isMobile} addNavbarBG={addNavbarBG} />
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
