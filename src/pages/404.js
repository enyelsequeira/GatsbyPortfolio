import React from "react"
import { Link } from "gatsby"
import PageLayout from "../layout/Layout"
import SEO from "../utils/seo"
import styled from "styled-components"

import notFound from "../images/notFound.png"

const BlockGroup = styled.div`
  display: flex;
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const Title = styled.h1`
  color: hsl(34.9,98.6%,72.9%);
  margin: 2rem 0;
`

const Text = styled.p`
  color:hsl(204,23.8%,95.9%);
  font-size: 2rem;
   margin-bottom: 2rem;

`

const ReturnBtn = styled(Link)`
  width: fit-content;
  padding: 0.5rem 2rem;
  background: hsl(34.9,98.6%,72.9%);
  color: #002f34;
  border-radius: 5px;
  margin: 2rem 0;
`
const NotFoundImage = styled.img`
border: 1px solid;
text-align: center;
margin: 0 auto;
border-radius: 40px;

`

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <BlockGroup>
      <LeftBlock>
        <Title>What you doing here??? </Title>
        <Text>Sorry, the page you are looking for doesn't exist</Text>
        <NotFoundImage src={notFound} alt="NotFoundPage"/>
        <ReturnBtn to="/">Go Home</ReturnBtn>
      </LeftBlock>
    </BlockGroup>
  </PageLayout>
)

export default NotFoundPage
