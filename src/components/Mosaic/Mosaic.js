import React, { useState } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 8rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ModalContainer = styled.div`
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .7);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 600px;
    max-height: 500px;
    height: auto;
  }


  @media only screen and (max-width: 825px) {
    img {
      max-width: 480px;
      max-height: 400px;
      height: auto;
    }
  }
`

const ImagesContainer = styled.div`
  max-height: 500px;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 94px 94px 94px 93px;
  grid-template-areas:
    "a a a b b b c c"
    "a a a b b b c c"
    "d d d b b b e e"
    "d d d b b b e e"
  ;

  @media only screen and (max-width: 825px) {
    grid-template-rows: 70px 70px 70px 69px;
  }

  .photo > img {
    cursor: pointer;
    width: 100%;
    object-fit: cover;
    object-position: center top;
    max-height: 100%;
  }

  .first {
    grid-area: a;
  }
  .second {
    grid-area: d;
  }
  .third {
    grid-area: c;
  }
  .fourth {
    grid-area: e;
  }
  .fifth {
    grid-area: b;
  }
`

const Mosaic = () => {

  const [ showModal, setShowModal ] = useState(false)
  const [ activePicture, setActivePicture ] = useState()

  const handlePictureClick = (image) => {
    setShowModal(true)
    setActivePicture(image)
  }

  let caitlynSquareSpacePhotos = [
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/42acac37-f8b7-4d95-a735-02aa2146ec2f/Caitlyn144.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/0493fec5-c887-49f3-8cfd-630630a48cee/Caitlyn102.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140582333-GKKFH6KS1TA9LL01TB5Q/Caitlyn542.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140802653-9SIPZXDZPRNIANBGREU6/Caitlyn319.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619139811130-HUW5J8O5R1E28I8X6VM2/Caitlyn286.jpg'
  ]

  let caitlynPhotos = [
    'assets/images/Caitlyn144.jpg',
    'assets/images/Caitlyn102.jpg',
    'assets/images/Caitlyn542.jpg',
    'assets/images/Caitlyn276.jpg',
    'assets/images/Caitlyn319.jpg'
  ]

  return (
    <Wrapper id="mosaic">
      { showModal &&
        <ModalContainer onClick={() => setShowModal(false)}>
          <img src={activePicture} alt=""/>
        </ModalContainer>
      }
      <ImagesContainer>
        <div className="photo first" onClick={() => handlePictureClick(caitlynPhotos[0])}>
          <img src={caitlynPhotos[0]} alt=""/>
        </div>
        <div className="photo second" onClick={() => handlePictureClick(caitlynPhotos[1])} ><img src={caitlynPhotos[1]} alt=""/></div>
        <div className="photo third" onClick={() => handlePictureClick(caitlynPhotos[2])} ><img src={caitlynPhotos[2]} alt=""/></div>
        <div className="photo fourth" onClick={() => handlePictureClick(caitlynPhotos[3])} ><img src={caitlynPhotos[3]} alt=""/></div>
        <div className="photo fifth" onClick={() => handlePictureClick(caitlynPhotos[4])} ><img src={caitlynPhotos[4]} alt=""/></div>
      </ImagesContainer>
    </Wrapper>
  )
}

export default Mosaic
