import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen, addNavbarBG }) => {

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} addNavbarBG={addNavbarBG} >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
