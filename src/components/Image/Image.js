import React from 'react'

import styled from 'styled-components'

const ImageWrapper = styled.div`

  width: 50%;
  img {
    max-height: 300px;
    min-height: 200px;
    max-width: 278px;
    min-width: 185px;
    border-radius: 50%;
    width: 100%;
  }
`


const Image = ({src, alt}) => <ImageWrapper className="imageWrapper"><img src={src} alt={alt}/></ImageWrapper>

export default Image
