import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 4rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 2rem;

  img {
    margin-left: 10%;
    height: auto;
    width: 80%;
  }
`

const Images = () => {

  let caitlynPhotos = [
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/42acac37-f8b7-4d95-a735-02aa2146ec2f/Caitlyn144.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/0493fec5-c887-49f3-8cfd-630630a48cee/Caitlyn102.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140582333-GKKFH6KS1TA9LL01TB5Q/Caitlyn542.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619140802653-9SIPZXDZPRNIANBGREU6/Caitlyn319.jpg',
    'https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619139811130-HUW5J8O5R1E28I8X6VM2/Caitlyn286.jpg'
  ]

  return (
    <Wrapper id="mosaic">
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
    </Wrapper>
  )
}

export default Images
