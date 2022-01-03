import styled from "styled-components";

export const StyledMenu = styled.nav`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => '#534f4b'};
  height: calc(100vh - 100px);
  width: 100%;
  min-width: 300px;
  text-align: center;
  /* padding: 0 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.8rem;
    padding: 1.5rem 0;
    font-weight: 300;
    letter-spacing: 0.5rem;
    color: ${({ open, theme }) => "black"};
    text-decoration: none;
    transition: color 0.3s linear;


    @media only screen and (max-width: 480px) {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${({ theme }) => '#e6f3fd'};
    }
  }
`;
