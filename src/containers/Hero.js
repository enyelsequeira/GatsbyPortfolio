import React from "react"
import Hero from "../components/Hero"
import { useStaticQuery, graphql } from "gatsby"

const HeroContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      picture: file(relativePath: { eq: "workpic.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.LeftSection>
          <Hero.Title
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}
          >
            Hello, I'm
          </Hero.Title>
          <Hero.Name>Enyel Sequeira</Hero.Name>
          <Hero.SubTitle>Full-stack Developer</Hero.SubTitle>
        </Hero.LeftSection>
        <Hero.RightSection>
          <Hero.Picture
            fixed={data.picture.childImageSharp.fixed}
            alt="myself"
          ></Hero.Picture>
        </Hero.RightSection>
      </Hero.Wrapper>
    </Hero>
  )
}

export default HeroContainer
