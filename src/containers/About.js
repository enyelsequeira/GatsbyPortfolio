import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import About from "../components/About"


const AboutContainer = () => {
  const data = useStaticQuery(graphql`{
  about: file(relativePath: {eq: "aboutme.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, formats: AVIF, placeholder: BLURRED, backgroundColor: "#264653")
    }
  }
}
`)
  return (
    <About id="About">
      <About.ContainerSection>
        <About.Wrapper>
          <About.LeftSection>
            <About.Picture
           image={data.about.childImageSharp.gatsbyImageData}
            width="100%"
          height="100%"
          formats={["auto", "WEBP", "AVIF"]}
          placeholder="blurred"
          backgroundColor="#264653"
          alt="Hero-image"
           />
          </About.LeftSection>
          <About.RightSection>
            <About.SubTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 3 }}
            >About me</About.SubTitle>
            <About.Title
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 3 }}
            >Get to know me</About.Title>
            <About.Description
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 3 }}
            >
              I am a web developer that comes from a teaching and{" "}
              <About.BolderCharacter>
                Business background.{" "}
              </About.BolderCharacter>
              Through my past experiences, I can balance the need of users and
              businesses to understand their pain points and how I can
              contribute as a{" "}
              <About.BolderCharacter>
                Front-end developer{" "}
              </About.BolderCharacter>{" "}
              and solve their problems.
            </About.Description>
            <About.Description
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 3 }}
            >
              I've worked with a wide range of people from different backgrounds
              and demographics. This has enabled me to adapt and become{" "}
              <About.BolderCharacter>flexible </About.BolderCharacter>
              in the workplace.
            </About.Description>
            <About.Button to="/contact">Find more</About.Button>
          </About.RightSection>
        </About.Wrapper>
      </About.ContainerSection>
    </About>
  );
}

export default AboutContainer
