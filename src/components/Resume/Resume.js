import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Image from '../Image/Image'
// get react pdf working
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  background: #171717;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const DocumentWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    .page > canvas {
      width: 500px !important;
      height: 100% !important;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-left: 80px;
  }
`
const CTAWrapper = styled.div`
  width: 50%;
  margin-left: 4rem;

  a {
    border-bottom: 1px solid #f08e80;
    color: #f08e80;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  img {
    border-radius: 2%;
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    img { width: 60%;}
  }

  @media only screen and (max-width: 600px ) {
    img {
      width: 80%;
    }
  }
`

const Resume = () => {
  const pdfLink = 'assets/CaitlynMarrNewestResume.pdf'
  const [ isMobile, setIsMobile ] = useState()

  useEffect(() => {
    const reportWindowSize = () => window.innerWidth

    const handleChangeSize = () => {
      let size = reportWindowSize()
      if (size < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleChangeSize()
    window.addEventListener('resize', handleChangeSize)
  })


  return (
    <Wrapper>
      <Fragment>
        <CTAWrapper>
          <a
            href="https://static1.squarespace.com/static/605cb22e7c9f0b38065bb581/t/6092c67c64cfc81ed79a4f54/1620231804602/Caitlyn+Marr+Newest+Resume.pdf"
            target="_blank"
            >Download Resume
          </a>
          <ImageWrapper>
            <img src="https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619138354619-SPHLTO1E2J591KL6D8GM/Caitlyn227.jpg?format=500w" alt="Caitlyn in black, closed smile"></img>
          </ImageWrapper>
        </CTAWrapper>
        <DocumentWrapper>
          <Document file={pdfLink} onLoadError={console.error}>
            <Page pageNumber={1} width={500}></Page>
          </Document>
        </DocumentWrapper>
      </Fragment>
    </Wrapper>
  )
}

export default Resume
