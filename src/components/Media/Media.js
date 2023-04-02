import React, { useState, Fragment } from "react";
import ReactPlayer from "react-player";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: #171717; */
  /* color: white; */

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  p {
    margin: 3rem 0 1rem 0;
  }

  @media only screen and (max-width: 640px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      margin-top: 2rem;
    }

    .video {
      width: 320px !important;
      height: 180px !important;
    }
  }
`;

const ButtonsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #d2c8bf;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  transition: all ease-in-out 150ms;

  &:hover {
    background: #a89f99;
  }
`;

const Media = () => {
  const caitlynVideos = [
    // {url: 'https://player.vimeo.com/video/580009431?h=6a27091000', title: 'Caitlyn Marr Acting Reel'},
    // {url: 'https://www.youtube.com/watch?v=prdZdzKAJ6Y', title: 'Caitlyn Marr Acting Reel'},
    { url: "https://youtu.be/iP9mDK_P2U0", title: "Caitlyn Marr Acting Reel" },
    {
      url: "https://youtu.be/uAJihTLvhsg",
      title: "Character Nora Durst | The Leftovers",
    },
    // {url: 'https://youtu.be/iH-Bma4M-JI', title: 'Romantic Comedy Scene'},
    { url: "https://youtu.be/Liy_2ObZO98", title: "Zuzu in Dance Nation" },
    { url: "https://youtu.be/ixvmI_BTmos", title: "Silly Commercial Clip" },
  ];

  const [activeVideo, setActiveVideo] = useState(caitlynVideos[0]);

  return (
    <Wrapper id="media">
      <h1>{activeVideo.title}</h1>
      <ReactPlayer
        className="video"
        url={activeVideo.url}
        config={{
          vimeo: {
            playerOptions: { controls: true },
          },
        }}
      />

      <p>Select another video to watch :)</p>
      <ButtonsWrapper>
        <StyledButton onClick={() => setActiveVideo(caitlynVideos[0])}>
          {caitlynVideos[0].title}
        </StyledButton>
        <StyledButton onClick={() => setActiveVideo(caitlynVideos[1])}>
          {caitlynVideos[1].title}
        </StyledButton>
        <StyledButton onClick={() => setActiveVideo(caitlynVideos[2])}>
          {caitlynVideos[2].title}
        </StyledButton>
        <StyledButton onClick={() => setActiveVideo(caitlynVideos[3])}>
          {caitlynVideos[3].title}
        </StyledButton>
        {/* <StyledButton onClick={() => setActiveVideo(caitlynVideos[4])}>{caitlynVideos[4].title}</StyledButton> */}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Media;
