import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, setOpen }) => {


  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <a href="#about" >
        About
      </a>
      <a href="#resumeContact" >
        Resume
      </a>
      <a href="#mosaic" >
        Gallery
      </a>
      <a href="#media" >
        Media
      </a>
      <a href="#resumeContact" >
        Contact
      </a>
      <a href="#instagram">
        Instagram
      </a>
    </StyledMenu>
  );
};
export default Menu;
