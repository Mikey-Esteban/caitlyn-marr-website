import React from 'react'
import styled from 'styled-components'
// get react pdf working
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Wrapper = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  /* background: #171717; */

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const DocumentWrapper = styled.div`
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

  @media only screen and (max-width: 475px) {
    margin-left: 80px;
  }
`

const Resume = () => {
  const pdfLink = 'assets/CaitlynMarrNewestResume.pdf'

  return (
    <Wrapper id="resume">
      <DocumentWrapper>
        <Document file={pdfLink} onLoadError={console.error}>
          <Page pageNumber={1} width={500}></Page>
        </Document>
      </DocumentWrapper>
    </Wrapper>
  )
}

export default Resume
