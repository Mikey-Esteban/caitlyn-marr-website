import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  height: 100vh;
  border: none;

  h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }
  }
  /* Style the video: 100% width and height to cover the entire window */
  #myVideo {
    position: absolute;
    z-index: -100;
    top: 0;
    width: 100%;
    height: 100vh;
    background: black;
    display: block;
    outline: none;
  }


  /* Add some content at the bottom of the video/page */
  .content {
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    height: 100vh;
    background-color: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: background-color ease-in-out 500ms;
  }

  .opaque {
    opacity: 0;
  }

  .fade-in-blur {
    animation-name: fadeIn;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    0% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0);
    }
  }

  #title {
    z-index: 1;
    cursor: pointer;
  }
  /* Style the button used to pause/play the video */
  #myBtn {
    z-index: 1;
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border: none;
    background: #fff;
    color: #000;
    cursor: pointer;
  }

  #myBtn:hover {
    background: #ddd;
    color: black;
  }
`

const Welcome = () => {

  const videoHasEnded = () => {
    const content = document.querySelector('#landingContent')
    content.classList.add('fade-in-blur')
    content.classList.remove('opaque')
    content.classList.add('fade-in-opacity')

    content.addEventListener('animationend', () => {
      content.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    })
  }
  useEffect(() => {
    const video = document.querySelector('#myVideo')

    video.addEventListener('ended', videoHasEnded)
  }, [])

  return (
    <Wrapper>
      <video autoPlay muted id="myVideo">
        <source src="/assets/videos/caitlyn-marr-clip.mp4" type="video/mp4" />
      </video>

      <div id="shadow">
        <div className="content opaque" id="landingContent">
          <h1 id="title">CAITLYN MARR</h1>
          <button id="myBtn" >Actor</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Welcome
