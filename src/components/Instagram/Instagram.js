import React from 'react'

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 4rem;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GridWrapper = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .overlay {
    position: relative;
    width: 175px;
    height: 175px;
  }

  .caption {
    overflow: hidden;
    background: rgba(0 ,0 ,0 , .3);
    color: white;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 175px;
    height: 175px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: .7rem;

    p {
      padding: .5rem;
    }
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
    object-fit: cover;
    height: 175px;
    width: 175px;
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
        <div className="caption" onClick={() => window.open(data.permalink)}><p>{data.caption}</p></div>
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
