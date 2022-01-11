import React from 'react'
import styled from 'styled-components'

import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

const Wrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CTAWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  a {
    border-bottom: 1px solid #f08e80;
    color: #f08e80;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }

  img {
    width: 70px;
    cursor: pointer;
    transition: all ease 150ms;
  }

  img:hover {
    box-shadow: 0 0 0 3px #534f4b;
  }
`

const ResumeContactWrapper = styled.div`
  padding: 0 3rem 3rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    gap: 2rem;
    flex-direction: column;
  }
`

const ResumeContact = ({isMobile}) => {
  return (
    <Wrapper id="resumeContact">
      <CTAWrapper>
          <a
            href="https://static1.squarespace.com/static/605cb22e7c9f0b38065bb581/t/6092c67c64cfc81ed79a4f54/1620231804602/Caitlyn+Marr+Newest+Resume.pdf"
            target="_blank"
            >Download Resume
          </a>
          <img
            src="/assets/images/actorsaccess.png"
            alt="actors access icon"
            onClick={() => window.open('https://resumes.actorsaccess.com/caitlynmarr')}
          />
          <img
            src="/assets/images/backstage.png"
            alt="backstage icon"
            onClick={() => window.open('https://www.backstage.com/u/caitlynmarr/')}
          />
      </CTAWrapper>
      <ResumeContactWrapper>
        <Resume isMobile={isMobile} />
        <Contact />
      </ResumeContactWrapper>
    </Wrapper>
  )
}

export default ResumeContact
