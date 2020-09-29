import React from "react"
import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import { Hero, About, Projects, Social } from "../containers"
// import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Projects />
    <Social />
    {/* <ContactForm /> */}
  </Layout>
)

export default IndexPage
