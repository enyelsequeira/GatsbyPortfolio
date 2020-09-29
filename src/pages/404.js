import React from "react"
import { Link } from "gatsby"
import PageLayout from "../layout/Layout"
import SEO from "../utils/seo"
import styled from "styled-components"

const BlockGroup = styled.div`
  display: flex;
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: #002f34;
`

const Text = styled.p`
  color: #9b92a0;
`

const ReturnBtn = styled(Link)`
  width: fit-content;
  padding: 0.5rem 1rem;
  background: #9b92a0;
  color: #002f34;
  border-radius: 5px;
`

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <BlockGroup>
      <LeftBlock>
        <Title>Whooooops!</Title>
        <Text>Sorry, the page you are looking for doesn't exist</Text>
        <ReturnBtn to="/">Go Home</ReturnBtn>
      </LeftBlock>
    </BlockGroup>
  </PageLayout>
)

export default NotFoundPage
