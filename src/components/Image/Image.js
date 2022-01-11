import React from 'react'

import styled from 'styled-components'

const ImageWrapper = styled.div`

  width: 50%;
  img {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    object-fit: cover;
    object-position: center top;
    overflow: hidden;
  }
`


const Image = ({src, alt}) => <ImageWrapper className="imageWrapper"><img src={src} alt={alt}/></ImageWrapper>

export default Image
