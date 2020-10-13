import React from 'react'
import styled from 'styled-components'

import logo from '../../public/astra-nova-logo-full.png'

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://astranova.org/">
        <img src={logo} alt="Astra Nova Logo" />
      </a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;

  img {
    width: 150px;
  }
`

export default Footer
