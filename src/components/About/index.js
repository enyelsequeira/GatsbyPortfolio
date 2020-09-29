import React from "react"

import {
  AboutSection,
  Wrapper,
  ContainerSection,
  LeftSection,
  RightSection,
  Picture,
  Title,
  SubTitle,
  Button,
  Description,
  BolderCharacter,
} from "./styles/About"

export default function About({ children, ...restProps }) {
  return <AboutSection {...restProps}>{children}</AboutSection>
}
About.ContainerSection = function AboutContainer({ children, ...restProps }) {
  return <ContainerSection {...restProps}>{children}</ContainerSection>
}
About.Wrapper = function AboutWrapper({ children, ...restProps }) {
  return (
    <Wrapper container {...restProps}>
      {children}
    </Wrapper>
  )
}

About.LeftSection = function AboutLeftSection({ children, ...restProps }) {
  return (
    <LeftSection item xs={12} sm={12} md={6} {...restProps}>
      {children}
    </LeftSection>
  )
}
About.RightSection = function AboutRightSection({ children, ...restProps }) {
  return (
    <RightSection item xs={12} sm={12} md={6} {...restProps}>
      {children}
    </RightSection>
  )
}
About.Picture = function AboutPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>
}

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
About.Description = function AboutDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>
}
About.Button = function AboutButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

About.BolderCharacter = function AboutBolder({ children, ...restProps }) {
  return <BolderCharacter {...restProps}>{children}</BolderCharacter>
}
