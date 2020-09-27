import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "@material-ui/core"
export const HeaderSection = styled.header`
  width: 100%;
`
export const HeaderContainer = styled(Container)`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
`
export const Nav = styled.nav`
  width: 100%;
  max-height: 20vh;
  min-height: 10vh;
  background: ${props => props.theme.colors.background2};
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
`
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  color: #fff;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 999;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const Links = styled(Link)`
  padding: 2rem;
  font-weight: bold;
  letter-spacing: 1rem;
  text-decoration: none;
  color: ${props => props.theme.colors.accent1};
`
export const LogoLink = styled(Link)``
export const Logo = styled(Img)`
  border-radius: 50%;
  border: 1px solid red;
  padding: 0.2rem 1rem;
  @media ${props => props.theme.breakpoints.mobile} {
    padding-top: 5rem;
  }
`
