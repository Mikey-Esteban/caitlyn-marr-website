import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;

  background: #171717;
  color: white;
`
const Instagram = () => {

  const access_token = process.env['REACT_APP_INSTAGRAM_ACCESS_TOKEN']
  const [ photoIds, setPhotoIds ] = useState()
  const [ imgUrl, setImgUrl ] = useState()

  useEffect(() => {
    axios.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`)
      .then(resp => {
        console.log(resp);
        const mediaIds = resp.data.data
        setPhotoIds(mediaIds)

        axios.get(`https://graph.instagram.com/${mediaIds[0].id}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`)
          .then(resp => {
            console.log(resp);
            setImgUrl(resp.data.media_url)
          })
          .catch(error => {
            console.log(error);
          })
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <Wrapper>
      I AM INSTAGRAM
      {imgUrl && <img src={imgUrl} alt=""/>}
    </Wrapper>
  )
}

export default Instagram
