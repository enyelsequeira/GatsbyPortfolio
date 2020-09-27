import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Burger from "./Burger"
import { HeaderContainer, HeaderSection, Logo, LogoLink, Nav } from "./styles"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.jpg" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <HeaderSection>
      <HeaderContainer maxWidth="lg" disableGutters={true}>
        <Nav>
          <LogoLink to="/">
            <Logo fixed={data.icon.childImageSharp.fixed} alt={siteTitle} />
          </LogoLink>
          <Burger />
        </Nav>
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
