import styled from 'styled-components'

const StyledButton = styled.button`
  background: none;
  border: 2px solid #f08e80;
  color: #f08e80;
  font-family: 'Montserrat', sans-serif;
  padding: 15px 30px;
  cursor: pointer;

  transition: all ease-in-out 150ms;


  &:hover {
    background: #f08e80;
    color: white;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Button = ({text, handleClick}) => <StyledButton onClick={handleClick}>{text}</StyledButton>

export default Button
