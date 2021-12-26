import React from "react";
import { useNavigate } from 'react-router-dom'
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen, redirect }) => {
  let navigate = useNavigate()


  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <a href="#" onClick={redirect('/about', navigate)}>
        About
      </a>
      <a href="#" onClick={redirect('/resume', navigate)}>
        Resume
      </a>
      <a href="#" onClick={redirect('/gallery', navigate)}>
        Gallery
      </a>
      <a href="#" onClick={redirect('/media', navigate)}>
        Media
      </a>
      <a href="#" onClick={redirect('/contact', navigate)}>
        Contact
      </a>
      <a href="#" onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}>
        Instagram
      </a>
    </StyledMenu>
  );
};
export default Menu;
