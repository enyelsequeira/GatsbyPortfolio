import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Hero from "../components/Hero"

const HeroContainer = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "workpic.png"}) {
    childImageSharp {
      gatsbyImageData( layout: CONSTRAINED)
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
            image={data.file.childImageSharp.gatsbyImageData}
            width="100%"
          height="100%"
          formats={["auto", "WEBP", "AVIF"]}
          placeholder="blurred"
          backgroundColor="#264653"
          alt="Hero-image"
          />
        </Hero.RightSection>
      </Hero.Wrapper>
    </Hero>
  );
}

export default HeroContainer
