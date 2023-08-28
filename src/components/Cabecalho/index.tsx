import React from 'react'
import styled from 'styled-components'

const Cabecalho = () => {
  return (
    <StyledHeader>
      <h1>EBAC Jobs</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

export default Cabecalho
