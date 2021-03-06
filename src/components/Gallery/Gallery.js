import React, { Fragment } from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel/Carousel'

const Wrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
`

const GalleryWrapper = styled.div`
  width: 100%:
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;

  img {
    height: 125px;
    object-fit: cover;
    object-position: center;
    width:  125px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;

    align-items: end;
    img {
      margin-left: 10%;
      height: auto;
      width: 80%;
    }
  }
`
const Gallery = ({isMobile}) => {

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
    'assets/images/Caitlyn319.jpg',
    'assets/images/Caitlyn_Marr_Headshot_2022.jpg',
    'assets/images/caitlyn-meagher-0001.jpg',
    'assets/images/caitlyn-meagher-0040.jpg',
    'assets/images/caitlyn-meagher-0092.jpg',
    'assets/images/caitlyn-meagher-9364.jpg',
    'assets/images/caitlyn-meagher-9455.jpg',
    'assets/images/caitlyn-meagher-9638.jpg',
    'assets/images/caitlyn-meagher-9698.jpg',
    'assets/images/caitlyn-meagher-9801.jpg'
  ]

  return (
    <Wrapper>
      {!isMobile && <Carousel multiMedia={caitlynPhotos} isPhoto={true} /> }
      <GalleryWrapper>
        <div className="photoOne">
          <img src={caitlynPhotos[0]} alt=""/>
        </div>
        <div className="photoTwo">
          <img src={caitlynPhotos[1]} alt=""/>
        </div>
        <div className="photoThree">
          <img src={caitlynPhotos[2]} alt=""/>
        </div>
        <div className="photoFour">
          <img src={caitlynPhotos[3]} alt=""/>
        </div>
        <div className="photoFive">
          <img src={caitlynPhotos[4]} alt=""/>
        </div>
        <div className="photoSix">
          <img src={caitlynPhotos[5]} alt=""/>
        </div>
        <div className="photoSeven">
          <img src={caitlynPhotos[6]} alt=""/>
        </div>
      </GalleryWrapper>
    </Wrapper>
  )
}

export default Gallery
