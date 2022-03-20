import React, { useState } from 'react'
import styled from 'styled-components'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { Minus } from '@styled-icons/boxicons-regular/Minus'

const Wrapper = styled.div`
  padding-top: 4rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  img {
    margin-left: 10%;
    height: auto;
    width: 80%;
  }
`

const IconWrapper = styled.div`
  cursor: pointer;
`

const Images = () => {

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

  const [ showAll, setShowAll ] = useState(false)

  return (
    <Wrapper id="mosaic">
      { !showAll ?
          <>
          <div className="photoOne"><img src={caitlynPhotos[0]} alt=""/></div>
          <div className="photoTwo"><img src={caitlynPhotos[1]} alt=""/></div>
          <div className="photoThree"><img src={caitlynPhotos[2]} alt=""/></div>
          <IconWrapper>
            <Plus size={50} onClick={() => setShowAll(true)} />
          </IconWrapper>
          </>
        :
          <>
          <div className="photoOne"><img src={caitlynPhotos[0]} alt=""/></div>
          <div className="photoTwo"><img src={caitlynPhotos[1]} alt=""/></div>
          <div className="photoThree"><img src={caitlynPhotos[2]} alt=""/></div>
          <div className="photoFour"><img src={caitlynPhotos[3]} alt=""/></div>
          <div className="photoFive"><img src={caitlynPhotos[4]} alt=""/></div>
          <div className="photoSix"><img src={caitlynPhotos[5]} alt=""/></div>
          <div className="photoSeven"><img src={caitlynPhotos[6]} alt=""/></div>
          <div className="photoEight"><img src={caitlynPhotos[7]} alt=""/></div>
          <IconWrapper>
            <Minus size={50} onClick={() => setShowAll(false)} />
          </IconWrapper>
          </>
      }
    </Wrapper>
  )
}

export default Images
