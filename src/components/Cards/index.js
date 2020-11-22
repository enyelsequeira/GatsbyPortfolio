import React from "react"

import {
  CardSection,
  Wrapper,
  CardContainer,
  ContentInfo,
  ContentTitle,
  Info,
  LinkContainer,
  Links,
  GridContainer,
  SectionTittle,
  Tags,
  Stack,
} from "./styles/Cards"

export default function Card({ children, ...restProps }) {
  return <CardSection {...restProps}>{children}</CardSection>
}

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      {children}
    </Wrapper>
  )
}

Card.SectionTittle = function ({ children, ...restProps }) {
  return <SectionTittle {...restProps}>{children}</SectionTittle>
}
Card.GridContainer = function CardGridContainer({ children, ...restProps }) {
  return (
    <GridContainer  {...restProps}>
      {children}
    </GridContainer>
  )
}
Card.CardContainer = function CardContainerCard({ children, ...restProps }) {
  return <CardContainer {...restProps}>{children}</CardContainer>
}

Card.ContentInfo = function CardContentInfo({ children, ...restProps }) {
  return <ContentInfo {...restProps}>{children}</ContentInfo>
}
Card.ContentTitle = function CardContentTitle({ children, ...restProps }) {
  return <ContentTitle {...restProps}>{children}</ContentTitle>
}
Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>
}
Card.LinkContainer = function CardLinkContainer({ children, ...restProps }) {
  return <LinkContainer {...restProps}>{children}</LinkContainer>
}

Card.Links = function CardLink({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>
}

Card.Tags = function CardTags({ children, ...restProps }) {
  return <Tags {...restProps}>{children}</Tags>
}
Card.Stack = function CardStack({ children, ...restProps }) {
  return <Stack {...restProps}>{children}</Stack>
}
