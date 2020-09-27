import React from "react"

import About from "../components/About"
import { useStaticQuery, graphql } from "gatsby"

const AboutContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "aboutme.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <About>
      <About.ContainerSection>
        <About.Wrapper>
          <About.LeftSection>
            <About.Picture
              fluid={data.about.childImageSharp.fluid}
              alt="about"
            ></About.Picture>
          </About.LeftSection>
          <About.RightSection>
            <About.SubTitle>About me</About.SubTitle>
            <About.Title>Get to know me</About.Title>
            <About.Description>
              I am a web developer that comes from a teaching and business
              background. Through my past experiences, I can balance the need of
              users and businesses to understand their pain points and how I can
              contribute as a front-end developer and solve their problems.
            </About.Description>
            <About.Description>
              I've worked with a wide range of people from different backgrounds
              and demographics. This has enabled me to adapt and become flexible
              in the workplace.
            </About.Description>
            <About.Button>Find more</About.Button>
          </About.RightSection>
        </About.Wrapper>
      </About.ContainerSection>
    </About>
  )
}

export default AboutContainer
