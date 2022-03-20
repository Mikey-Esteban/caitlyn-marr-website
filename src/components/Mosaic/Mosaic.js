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
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  .photo {
    width: 32%;
    max-width: 32%;
  }

  .photo > img {
    width: 100%;
    height: 300px;
    cursor: pointer;
    object-fit: cover;
    object-position: center top;
  }

  @media only screen and (max-width: 825px) {
    max-width: 600px;

    .photo > img {
      height: 200px;
    }
  }

  /* .photo > img {
    border: 1px solid red;
    cursor: pointer;
    width: 30%;
    object-fit: cover;
    object-position: center top;
  } */
`

const Mosaic = () => {

  const [ showModal, setShowModal ] = useState(false)
  const [ activePicture, setActivePicture ] = useState()

  const handlePictureClick = (image) => {
    setShowModal(true)
    setActivePicture(image)
  }

  let caitlynPhotos = [
    'assets/images/caitlyn-meagher-0001.jpg',
    'assets/images/caitlyn-meagher-9638.jpg',
    'assets/images/caitlyn-meagher-9801.jpg',
    'assets/images/caitlyn-meagher-9698.jpg',
    'assets/images/Caitlyn_Marr_Headshot_2022.jpg',
    'assets/images/caitlyn-meagher-0040.jpg',
    'assets/images/caitlyn-meagher-0092.jpg',
    'assets/images/caitlyn-meagher-9364.jpg',
    'assets/images/caitlyn-meagher-9455.jpg',
    'assets/images/CaitlynMarrCommercialHeadshot1.jpg',
    'assets/images/Caitlyn542.jpg',
    'assets/images/Caitlyn319.jpg',
    'assets/images/Caitlyn276.jpg',
    'assets/images/Caitlyn144.jpg',
    'assets/images/Caitlyn102.jpg',
  ]

  return (
    <Wrapper id="mosaic">
      { showModal &&
        <ModalContainer onClick={() => setShowModal(false)}>
          <img src={activePicture} alt=""/>
        </ModalContainer>
      }
      <ImagesContainer>
        <div className="photo first" onClick={() => handlePictureClick(caitlynPhotos[0])}><img src={caitlynPhotos[0]} alt=""/></div>
        <div className="photo second" onClick={() => handlePictureClick(caitlynPhotos[1])} ><img src={caitlynPhotos[1]} alt=""/></div>
        <div className="photo third" onClick={() => handlePictureClick(caitlynPhotos[2])} ><img src={caitlynPhotos[2]} alt=""/></div>
        <div className="photo fourth" onClick={() => handlePictureClick(caitlynPhotos[3])} ><img src={caitlynPhotos[3]} alt=""/></div>
        <div className="photo fifth" onClick={() => handlePictureClick(caitlynPhotos[4])} ><img src={caitlynPhotos[4]} alt=""/></div>
        <div className="photo sixth" onClick={() => handlePictureClick(caitlynPhotos[5])} ><img src={caitlynPhotos[5]} alt=""/></div>
        <div className="photo seven" onClick={() => handlePictureClick(caitlynPhotos[6])} ><img src={caitlynPhotos[6]} alt=""/></div>
        <div className="photo eight" onClick={() => handlePictureClick(caitlynPhotos[7])} ><img src={caitlynPhotos[7]} alt=""/></div>
        <div className="photo nine" onClick={() => handlePictureClick(caitlynPhotos[8])} ><img src={caitlynPhotos[8]} alt=""/></div>
        <div className="photo ten" onClick={() => handlePictureClick(caitlynPhotos[9])} ><img src={caitlynPhotos[9]} alt=""/></div>
        <div className="photo eleven" onClick={() => handlePictureClick(caitlynPhotos[10])} ><img src={caitlynPhotos[10]} alt=""/></div>
        <div className="photo twelve" onClick={() => handlePictureClick(caitlynPhotos[11])} ><img src={caitlynPhotos[11]} alt=""/></div>
        <div className="photo thirteen" onClick={() => handlePictureClick(caitlynPhotos[12])} ><img src={caitlynPhotos[12]} alt=""/></div>
        <div className="photo fourteen" onClick={() => handlePictureClick(caitlynPhotos[13])} ><img src={caitlynPhotos[13]} alt=""/></div>
        <div className="photo fifteen" onClick={() => handlePictureClick(caitlynPhotos[14])} ><img src={caitlynPhotos[14]} alt=""/></div>
      </ImagesContainer>
    </Wrapper>
  )
}

export default Mosaic
