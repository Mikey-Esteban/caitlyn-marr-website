import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {


  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <a href="#" >
        About
      </a>
      <a href="#" >
        Resume
      </a>
      <a href="#" >
        Gallery
      </a>
      <a href="#" >
        Media
      </a>
      <a href="#" >
        Contact
      </a>
      <a href="#" onClick={() => window.open('https://www.instagram.com/caitlynmarr22/')}>
        Instagram
      </a>
    </StyledMenu>
  );
};
export default Menu;
