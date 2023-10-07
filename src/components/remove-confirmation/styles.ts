import { button } from "@/styles"

import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
`

export const Message = styled.p`
  margin: 1.25rem 0;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

export const BtnNo = styled.button`
  ${button}

  background: transparent;
  border-color: transparent;
  color: inherit;
`

export const BtnYes = styled.button`
  ${button}
`
