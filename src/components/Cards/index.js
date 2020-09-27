import React from "react"

import {
  CardSection,
  Wrapper,
  CardContainer,
  Picture,
  ContentInfo,
  ContentTitle,
  Info,
  LinkContainer,
  DividerLine,
  Links,
  GridContainer,
} from "./styles/Cards"

export default function Card({ children, ...restProps }) {
  return <CardSection {...restProps}>{children}</CardSection>
}

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return (
    <Wrapper container spacing={0} {...restProps}>
      {children}
    </Wrapper>
  )
}
Card.GridContainer = function CardGridContainer({ children, ...restProps }) {
  return (
    <GridContainer item xs={12} sm={8} md={6} {...restProps}>
      {children}
    </GridContainer>
  )
}
Card.CardContainer = function CardContainerCard({ children, ...restProps }) {
  return <CardContainer {...restProps}>{children}</CardContainer>
}
Card.Picture = function CardPicture({ src, children, ...restProps }) {
  return <Picture src={src} {...restProps} />
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
Card.DividerLine = function CardDivider({ children, ...restProps }) {
  return <DividerLine {...restProps}>{children}</DividerLine>
}
