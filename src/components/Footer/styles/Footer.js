import styled from "styled-components"
import { Grid, Container } from "@material-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const FooterSection = styled.section``

export const Wrapper = styled(Grid)`
  background: ${props => props.theme.colors.background2};
`

export const TopBar = styled(Grid)`
  text-align: center;
`

export const TopLeft = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TopCenter = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TopRight = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled(Img)`
  width: 80px;
  border-radius: 50%;
  @media (min-width: 320px) and (max-width: 959px) {
    margin: 2rem 0;
  }
`
export const TitleCenter = styled.h1`
  color: ${props => props.theme.colors.primary1};
  font-size: 5rem;
  letter-spacing: 0.2rem;
`
export const Button = styled(Link)`
  border: 1px solid ${props => props.theme.colors.accent1};
  padding: 1rem 5rem;
  color: ${props => props.theme.colors.accent1};
  &:hover {
    box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);
    color: ${props => props.theme.colors.accent1};
  }
  @media (min-width: 320px) and (max-width: 959px) {
    margin: 2rem 0;
  }
`
export const BottomBar = styled(Container)``
export const List = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`
export const ListItem = styled(Link)`
  margin: 2rem;
  font-size: 3rem;

  color: ${props => props.theme.colors.primary1};
  &:hover {
    color: ${props => props.theme.colors.accent1};
  }
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.accent1 : theme.colors.primary1};
`
export const Copyright = styled.p`
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  margin: 3rem 0;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2rem;
  }
`
