import React from "react"
import {
  SocialSection,
  Wrapper,
  GridContainer,
  TopPart,
  BottomPart,
  Cards,
  Logo,
  Title,
  SubTitle,
  LinksTitle,
} from "./styles/Social"

export default function Social({ children, ...restProps }) {
  return <SocialSection {...restProps}>{children}</SocialSection>
}
Social.Wrapper = function SocialWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}
Social.GridContainer = function SocialContainer({ children, ...restProps }) {
  return (
    <GridContainer {...restProps}>
      {children}
    </GridContainer>
  )
}

Social.TopPart = function SocialTop({ children, ...restProps }) {
  return <TopPart {...restProps}>{children}</TopPart>
}
Social.BottomPart = function SocialBottom({ children, ...restProps }) {
  return (
    <BottomPart item container spacing={2} xs={12} {...restProps}>
      {children}
    </BottomPart>
  )
}
Social.Cards = function SocialCards({ children, ...restProps }) {
  return (
    <Cards item xs={12} sm={4} md={3} {...restProps}>
      {children}
    </Cards>
  )
}
Social.Logo = function SocialLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}
Social.Title = function SocialTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Social.SubTitle = function SocialSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Social.LinksTitle = function SocialLinks({ children, ...restProps }) {
  return <LinksTitle {...restProps}>{children}</LinksTitle>
}
