import React, { useState } from 'react'
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

const ModalContainer = styled.div`
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-width: 700px;
  min-height: 100vh;
  max-height: calc(100vh - 210px);
  overflow-y: auto;

  background: rgba(0, 0, 0, .7);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 480px) {
    justify-content: flex-start;

    .LOOK-AT-ME {
      transform: scale(.5);
    }
  }

`

const DocumentWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  cursor: pointer;

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

const Resume = ({isMobile}) => {
  const pdfLink = 'assets/CaitlynMarrNewestResume.pdf'

  const [ showModal, setShowModal ] = useState(false)

  return (
    <Wrapper id="resume">
      { showModal && !isMobile &&
        <ModalContainer onClick={() => setShowModal(false)}>
          <Document
            file={pdfLink}
            onLoadError={console.error}
          >
            <Page className="LOOK-AT-ME" pageNumber={1}></Page>
          </Document>
        </ModalContainer>
      }
      <DocumentWrapper>
        <Document
          file={pdfLink}
          onLoadError={console.error}
          onClick={() => setShowModal(true)}
        >
          <Page pageNumber={1} width={500}></Page>
        </Document>
      </DocumentWrapper>
    </Wrapper>
  )
}

export default Resume
