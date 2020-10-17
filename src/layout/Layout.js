import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../components"
import Footer from "../containers/Footer"

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </>
  )
}

export default PageLayout
