import React, { Fragment } from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel/Carousel'

const Wrapper = styled.div`
  width: 100%;
`

const GalleryWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;

  img {
    height: 150px;
    object-fit: cover;
    object-position: center;
    width:  150px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;

    img {
      height: auto;
      width: 100%;
    }
  }
`
const Gallery = ({isMobile}) => {

  let caitlynPhotos = [
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619139811130-HUW5J8O5R1E28I8X6VM2/Caitlyn286.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/42acac37-f8b7-4d95-a735-02aa2146ec2f/Caitlyn144.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/0493fec5-c887-49f3-8cfd-630630a48cee/Caitlyn102.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140582333-GKKFH6KS1TA9LL01TB5Q/Caitlyn542.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140802653-9SIPZXDZPRNIANBGREU6/Caitlyn319.jpg'
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
      </GalleryWrapper>
    </Wrapper>
  )
}

export default Gallery
