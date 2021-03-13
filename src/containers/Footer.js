import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../components/Footer"


const FooterContainer = ({ siteAuthor }) => {
  const data = useStaticQuery(graphql`{
  icon: file(relativePath: {eq: "icon.jpg"}) {
    childImageSharp {
      gatsbyImageData( layout: CONSTRAINED,  placeholder: BLURRED, backgroundColor: "#264653")
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
                image={data.icon.childImageSharp.gatsbyImageData}
                formats={["auto", "WEBP", "AVIF"]}
                alt={siteAuthor}
                width="100%"
          height="100%"
      
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
  );
}

export default FooterContainer
