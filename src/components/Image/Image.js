import React from 'react'

import styled from 'styled-components'

const ImageWrapper = styled.div`

  width: 50%;
  img {
    max-height: 300px;
    max-width: 278px;
    border-radius: 50%;
    width: ${props => props.aboutImage? '100%' : '100%'};
  }

  @media only screen and (max-width: 800px) {
    width: ${props => props.aboutImage? '50%' : '60%'};
  }
  @media only screen and (max-width: 700px) {
    width: ${props => props.aboutImage? '50%' : '100%'};
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`


const Image = ({src, alt, aboutImage}) => <ImageWrapper className="imageWrapper" aboutImage={aboutImage}><img src={src} alt={alt}/></ImageWrapper>

export default Image
