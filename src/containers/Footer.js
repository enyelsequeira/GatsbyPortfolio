import React from "react"

import Footer from "../components/Footer"
import { useStaticQuery, graphql } from "gatsby"

const FooterContainer = ({ siteAuthor }) => {
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
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.TopBar>
          <Footer.TopLeft>
            <Footer.ListItem to="/">
              <Footer.Icon
                fluid={data.icon.childImageSharp.fluid}
                alt={siteAuthor}
              />
            </Footer.ListItem>
          </Footer.TopLeft>
          <Footer.TopCenter>
            <Footer.TitleCenter>Let's Talk</Footer.TitleCenter>
          </Footer.TopCenter>
          <Footer.TopRight>
            <Footer.Button to="/contact">Let's chat</Footer.Button>
          </Footer.TopRight>
        </Footer.TopBar>
        <Footer.BottomBar>
          <Footer.List>
            <Footer.ListItem to="/">Home</Footer.ListItem>
            <Footer.ListItem to="#About">About</Footer.ListItem>
            <Footer.ListItem to="#Projects">Projects</Footer.ListItem>
            <Footer.ListItem
            to="/contact">Contact</Footer.ListItem>
          </Footer.List><Footer.Copyright>© {new Date().getFullYear()} | {siteAuthor}
        </Footer.Copyright>
        </Footer.BottomBar></Footer.Wrapper>
    </Footer>
  )
}

export default FooterContainer
