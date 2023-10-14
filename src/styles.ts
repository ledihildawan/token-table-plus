import "react-toastify/dist/ReactToastify.css"
import "react-loading-skeleton/dist/skeleton.css"

import { Link } from "react-router-dom"

import styled, { createGlobalStyle, css } from "styled-components"

export const button = css`
  border: 1px solid #2569a5;
  border-radius: 4px;
  padding: 0.5625rem 1.125rem;
  background: #2569a5;
  color: #fff;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`

const container = css`
  max-width: 74.25rem;
  width: 100%;
  margin: 0 auto;

  @media (width <= 1200px) {
    padding: 0 1rem;
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #444F5C;
    background: #F3F7FB;
    font-family: 'Open Sans', sans-serif;
  }

  main {
    flex: 1;
    ${container}
    margin: 0 auto 3.25rem;
  }

  .pagination {
    display: flex;
    gap: .5rem;
    justify-content: flex-end;
    margin: 1.625rem 0 0;
    padding: 0;
    list-style: none;

    @media (width < 576px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .pagination a {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #BCC9DA;
    border-radius: 6px;
    padding: .75rem;
    color: #444F5C;
    font-size: .875rem;
    line-height: 0;
    cursor: default;
  }

  .pagination li:not(.disabled) a:hover {
    border-color: #1B91E4;
    background: #1B91E4;
    color: #fff;
    cursor: pointer;
  }

  .pagination li.active a {
    border-color: #1B91E4;
    color: #fff;
    background: #1B91E4;
  }

  .pagination li.disabled a {
    pointer-events: none;
    color: #ACBCCF;
    border: 1px solid #ACBCCF;
  }

  .ReactModalPortal > div {
    z-index: 9999;
  }

  div[aria-label="Delete Confirmation Modal"] {
    @media (width < 395px) {
      max-width: calc(100% - 32px)
    }
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

  @media (width < 576px) {
    height: initial;
    padding-top: 15px;
  }
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
  position: relative;
  padding-right: 0.9375rem;
  padding-bottom: 0.4375rem;
  color: #8597ac;

  ${(props) => {
    return (
      props.$active &&
      css`
        color: #1e5387;
        font-weight: 700;
        border-bottom: 4px solid #2569a5;
      `
    )
  }}
`

export const NavigationLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &::after {
    content: "";
    width: 100%;
    height: 33px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
`

export const Breadcrumb = styled.nav`
  margin: 1rem 0 0.875rem;
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
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 2.375rem;

  & > span {
    display: inherit;

    @media (width < 576px) {
      width: 100%;
    }
  }
`

export const Select = styled.select`
  width: 215px;
  border: 0;
  outline: 1px solid #e3ebf4;
  border-right: 0.875rem solid transparent;
  border-radius: 4px;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;

  &:invalid {
    color: #9eaec1;
  }

  option:checked {
    display: none;
  }

  @media (width < 576px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  width: 296px;
  position: relative;
  outline: 1px solid #e3ebf4;
  border-radius: 4px;
  padding: 0.625rem 1rem;
  display: flex;
  gap: 0.75rem;

  @media (width < 576px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 0;
  color: inherit;
  font-family: inherit;
  font-size: 0.875rem;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #9eaec1;
  }

  @media (width < 576px) {
    width: 100%;
  }
`

export const BtnRemove = styled.button`
  ${button}

  background: #e11730;
  border-color: #e11730;
`

export const BtnSearch = styled.button`
  ${button}

  @media (width < 576px) {
    width: 100%;
  }
`

export const TableWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

export const PaginationLoadingWrapper = styled.div`
  margin: 1.625rem 0 0;
  span {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`

export const CellWrapper = styled.div<{ $link?: boolean; $color?: string }>`
  color: ${({ $color }) => $color ?? "#5b6570"};
  text-decoration: ${({ $link }) => ($link ? "underline" : "none")};
  cursor: ${({ $link }) => ($link ? "pointer" : "normal")};
`

export const DetailRowWrapper = styled.div`
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
    max-width: 345px;
    width: 100%;
    color: #444f5c;
    font-weight: 700;
  }
`

export const EmptyStateWrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 0.875rem;
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
