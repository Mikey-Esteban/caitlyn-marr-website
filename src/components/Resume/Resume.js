import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Image from '../Image/Image'
// get react pdf working
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  gap: 8rem;

  @media only screen and (max-width: 925px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
  }
`
const DocumentWrapper = styled.div`
  padding: 0 1rem;
  width: 50%;

  @media only screen and (max-width: 725px) {
    .page > canvas {
      width: 600px !important;
      height: 100% !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .page > canvas {
      width: 400px !important;
      height: 100% !important;
    }
  }
`
const CTAWrapper = styled.div`
  width: 50%;
  a {
    border-bottom: 1px solid #f08e80;
    color: #f08e80;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }

  @media only screen and (max-width: 925px) {
    text-align: center;
  }

`

const ImageWrapper = styled.div`
  margin-top: 2rem;

  img {
    width: 90%;
  }

  @media only screen and (max-width: 925px) {
    z-index: 10;
    position: absolute;
    top: 0;
    right: 1rem;

    img {
      margin-top: -2rem;
      float: right;
      width: 40%;
    }
  }

  @media only screen and (max-width: 725px) {
    img {
      width: 35%;
    }
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    margin-left: 2rem;

    img { width: 100%;}
  }
`

const ImageDocumentWrapper = styled.div`
  position: relative;
`

const Resume = () => {
  const pdfLink = 'assets/CaitlynMarrNewestResume.pdf'
  const [ isMobile, setIsMobile ] = useState()
  const [ isMedium, setIsMedium ] = useState()

  useEffect(() => {
    const reportWindowSize = () => window.innerWidth

    const handleChangeSize = () => {
      let size = reportWindowSize()
      if (size < 600) {
        setIsMobile(true)
        setIsMedium(false)
      }
      else if (size >= 600 && size < 925) {
        setIsMobile(false)
        setIsMedium(true)
      } else {
        setIsMobile(false)
        setIsMedium(false)
      }
    }

    handleChangeSize()
    window.addEventListener('resize', handleChangeSize)
  })


  return (
    <Wrapper>
      { !isMobile && !isMedium &&
        <Fragment>
          <DocumentWrapper>
            <Document file={pdfLink} onLoadError={console.error}>
              <Page pageNumber={1} width={600}></Page>
            </Document>
          </DocumentWrapper>
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
        </Fragment>
      }
      { isMedium &&
        <Fragment>
          <CTAWrapper>
            <a
              href="https://static1.squarespace.com/static/605cb22e7c9f0b38065bb581/t/6092c67c64cfc81ed79a4f54/1620231804602/Caitlyn+Marr+Newest+Resume.pdf"
              target="_blank"
              >Download Resume
            </a>
          </CTAWrapper>
          <ImageDocumentWrapper>
            <ImageWrapper>
              <img src="https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619138354619-SPHLTO1E2J591KL6D8GM/Caitlyn227.jpg?format=500w" alt="Caitlyn in black, closed smile"></img>
            </ImageWrapper>
            <DocumentWrapper>
              <Document file={pdfLink} onLoadError={console.error}>
                <Page className="page" pageNumber={1} width={700}></Page>
              </Document>
            </DocumentWrapper>
          </ImageDocumentWrapper>
        </Fragment>
      }
      { isMobile &&
        <Fragment>
          <DocumentWrapper>
            <Document file={pdfLink} onLoadError={console.error}>
              <Page className="page" pageNumber={1} width={700}></Page>
            </Document>
          </DocumentWrapper>
          <CTAWrapper>
            <a
              href="https://static1.squarespace.com/static/605cb22e7c9f0b38065bb581/t/6092c67c64cfc81ed79a4f54/1620231804602/Caitlyn+Marr+Newest+Resume.pdf"
              target="_blank"
              >Download Resume
            </a>
          </CTAWrapper>
          <ImageWrapper>
            <img src="https://images.squarespace-cdn.com/content/v1/605cb22e7c9f0b38065bb581/1619138354619-SPHLTO1E2J591KL6D8GM/Caitlyn227.jpg?format=500w" alt="Caitlyn in black, closed smile"></img>
          </ImageWrapper>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Resume
