import React from "react"
import {
  HeroSection,






  LeftSection,



  Name,
  Picture, RightSection,

  SubTitle, Title, Wrapper
} from "./styles/Hero"

export default function Hero({ children, ...restProps }) {
  return <HeroSection {...restProps}>{children}</HeroSection>
}

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
  return (
    <Wrapper container {...restProps}>
      {children}
    </Wrapper>
  )
}

Hero.LeftSection = function HeroLeftSection({ children, ...restProps }) {
  return (
    <LeftSection {...restProps}>
      {children}
    </LeftSection>
  )
}
Hero.RightSection = function HeroRightSection({ children, ...restProps }) {
  return (
    <RightSection {...restProps}>
      {children}
    </RightSection>
  )
}
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Hero.Name = function HeroName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}
Hero.SubTitle = function HeroSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Hero.Picture = function HeroPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>
}
