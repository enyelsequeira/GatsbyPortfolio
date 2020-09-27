import React from "react"
import SEO from "../utils/seo"
import Layout from "../layout/Layout"
import { Hero, About, Projects, Social, Footer } from "../containers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Projects />
    <Social />
    <Footer />
  </Layout>
)

export default IndexPage
