import React from "react"
import Layout from "../layout/Layout"
import ContactForm from "../components/ContactForm"
import SEO from "../utils/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="to contact me please reach by sending an email stating the purpose of your email and shortly I will get back to you"
      />
      <ContactForm />
    </Layout>
  )
}

export default Contact
