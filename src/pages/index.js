import React from "react"
import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import { Hero, About, Projects, Social } from "../containers"
// import ContactForm from "../components/contactForm"

const IndexPage = () => {
    return(
      <Layout>
          <SEO
            title="Home"
            description="Enyel personal site to showcase his latest works "
          />
          <Hero />
          <About />
          <Projects />
          <Social />
      </Layout>
      )

}



export default IndexPage
