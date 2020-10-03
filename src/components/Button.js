import React from 'react'
import styled from 'styled-components'

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 20px 30px;
  border: 2px solid #000;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  transition: all 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export default Button
