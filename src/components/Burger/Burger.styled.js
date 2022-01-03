// Burger.styled.js
import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px; /* 2rem */
  height: 32px; /* 2rem */
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus {
    outline: none;
  }

  div {
    width: 32px; /* 2.05rem */
    height: 2px; /* .15rem */
    background: ${({ theme, open }) =>
      open ? 'white' : 'white'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
