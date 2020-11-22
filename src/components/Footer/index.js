import React from "react"
import {
  FooterSection,
  Wrapper,
  TopBar,
  TopCenter,
  TopLeft,
  TopRight,
  Icon,
  TitleCenter,
  Button,
  BottomBar,
  List,
  ListItem,
  Copyright,
} from "./styles/Footer"

export default function Footer({ children, ...restProps }) {
  return <FooterSection {...restProps}>{children}</FooterSection>
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return (
    <Wrapper container {...restProps}>
      {children}
    </Wrapper>
  )
}
// Top bar Container with 3 items inside of if
Footer.TopBar = function FooterTopBar({ children, ...restProps }) {
  return (
    <TopBar container item {...restProps}>
      {children}
    </TopBar>
  )
}
Footer.BottomBar = function FooterBottomBar({ children, ...restProps }) {
  return <BottomBar {...restProps}>{children}</BottomBar>
}

Footer.TopLeft = function FooterTopItems({ children, ...restProps }) {
  return (
    <TopLeft  {...restProps}>
      {children}
    </TopLeft>
  )
}
Footer.TopCenter = function FooterCenter({ children, ...restProps }) {
  return (
    <TopCenter {...restProps}>
      {children}
    </TopCenter>
  )
}
Footer.TopRight = function FooterRight({ children, ...restProps }) {
  return (
    <TopRight  {...restProps}>
      {children}
    </TopRight>
  )
}

Footer.Icon = function FooterIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}
Footer.TitleCenter = function FooterTitle({ children, ...restProps }) {
  return <TitleCenter {...restProps}>{children}</TitleCenter>
}
Footer.Button = function FooterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}
Footer.ListItem = function FooterListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>
}
Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>
}
