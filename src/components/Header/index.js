import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll } from "react-scroll"
import {
  MobileIcon, Nav,
  NavBarContainer,

  NavIcon,



  NavItem, NavLinks, NavLogo,


  NavMenu,


  PageLink
} from "./styles/Header"

function Navbar({ siteTitle }) {
  const data = useStaticQuery(graphql`{
  icon: file(relativePath: {eq: "icon.jpg"}) {
    childImageSharp {
      gatsbyImageData( layout: CONSTRAINED,  placeholder: BLURRED, backgroundColor: "#264653" )
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
  const toggleHome = () => {
    animateScroll.scrollToTop()
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return <>
    <IconContext.Provider value={{ color: "#141414" }}>
      <Nav active={scroll} click={click}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavIcon
              image={data.icon.childImageSharp.gatsbyImageData}
              alt={siteTitle}
              formats={["auto", "WEBP", "AVIF"]}
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
              <PageLink to="/">Home</PageLink>
            </NavItem>
            <NavItem>
              <NavLinks
                to="About"
                exact="true"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Projects"
                spy={true}
                exact="true"
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <PageLink to="/contact">Contact</PageLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  </>;
}

export default Navbar
