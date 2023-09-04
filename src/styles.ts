import { Link } from "react-router-dom"

import styled, { createGlobalStyle, css } from "styled-components"

const container = css`
  max-width: 74.25rem;
  width: 100%;
  margin: 0 auto;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #F3F7FB;
    font-family: 'Open Sans', sans-serif;
  }

  main {
    flex: 1;
    ${container}
    margin: 0 auto 3.25rem;
  }
`

export const AppLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HeaderWrapper = styled.header`
  height: 123px;
  display: flex;
  align-items: flex-end;
  background: #fff;
  box-shadow: 0px 4px 19px 0px #00000012;
`

export const NavigationWrapper = styled.nav`
  ${container}
`

export const NavigationList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const NavigationListItem = styled.li<{ $active?: any }>`
  padding-right: 0.9375rem;
  padding-bottom: 0.4375rem;
  color: #8597ac;

  ${(props) =>
    props.$active &&
    css`
      color: #1e5387;
      font-weight: 700;
      border-bottom: 4px solid #2569a5;
    `}
`

export const NavigationLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const Breadcrumb = styled.nav`
  margin: 0.875rem 0;
  color: #acbccf;
  font-size: 0.625rem;
`

export const CardWrapper = styled.div`
  border: 0.5px solid #e3ebf4;
  padding: 1.0625rem 2rem 1.5rem 1.875rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #0094ff40;
`

export const CardTitle = styled.h2`
  margin-bottom: 1.8125rem;
  color: #2569a5;
  font-size: 1rem;
  font-weight: 600;
`

export const FilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 2.375rem;
`

export const TableWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

export const CellWrapper = styled.div<{ $link?: boolean; $color?: string }>`
  color: ${({ $color }) => $color ?? "#5b6570"};
  text-decoration: ${({ $link }) => ($link ? "underline" : "none")};
  cursor: ${({ $link }) => ($link ? "pointer" : "normal")};
`

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.9375rem;
  padding: 0.5rem 0;
  margin-bottom: 0.4375rem;

  p {
    margin: 0;
  }

  & > p:first-child {
    width: 125px;
    color: #444f5c;
  }

  & > p:last-child {
    color: #444f5c;
    font-weight: 700;
  }
`

export const FooterWrapper = styled.footer`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d4279;
  color: #fff;
  font-size: 0.875rem;
`
