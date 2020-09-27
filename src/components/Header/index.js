import React, { useState, useEffect } from "react"
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./styles/Header"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { useStaticQuery, graphql } from "gatsby"

function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon
                fluid={data.icon.childImageSharp.fluid}
                alt="about"
              ></NavIcon>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? (
                <FaTimes color="hsl(34.9,98.6%,72.9%)" />
              ) : (
                <FaBars color="hsl(34.9,98.6%,72.9%)" />
              )}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#About">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="#Projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
