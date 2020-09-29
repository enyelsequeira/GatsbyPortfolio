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
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 500,
              duration: 2,
            }}
          >
            Hello, I'm
          </Hero.Title>
          <Hero.Name
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 3 }}
          >
            Enyel Sequeira
          </Hero.Name>
          <Hero.SubTitle
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            Full-stack Developer
          </Hero.SubTitle>
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
