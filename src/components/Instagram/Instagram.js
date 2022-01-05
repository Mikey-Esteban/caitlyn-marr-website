import React from 'react'

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  ${'' /* background: #171717; */}
  ${'' /* color: white; */}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GridWrapper = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  .overlay {
    position: relative;
  }

  .caption {
    background: rgba(0 ,0 ,0 , .5);
    color: white;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .caption:hover {
    background: none;
    color: transparent;
  }

  .caption:hover + img {
    filter: grayscale(0);
  }

  img {
    filter: grayscale(100%);
    width: 150px;
    height: 150px;
  }

  img:hover {
    filter: grayscale(0);
  }
`
const Instagram = ({grid}) => {

  console.log('INSTAGRAM COMPONET', grid);


  let list = grid.map(data => {
    return (
      <div className="overlay" key={data.id}>
        <div className="caption" onClick={() => window.open('https://www.instagram.com/mikeyesteban.design/')}>{data.caption}</div>
        <img src={data.media_url} alt=""/>
      </div>
    )
  })

  return (
    <Wrapper id="instagram">
      <GridWrapper>
        {list}
      </GridWrapper>
    </Wrapper>
  )
}

export default Instagram
