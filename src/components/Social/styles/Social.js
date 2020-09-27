import styled from "styled-components"
import { Grid, Container } from "@material-ui/core"

export const SocialSection = styled.section`
  width: 80%;
  padding: 1rem 2rem;
  height: 100%;
  margin: 5rem auto;
  background: ${props => props.theme.colors.background1};

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin: 2rem auto;
  }
  @media (min-width: 600px) and (max-width: 874px) {
    width: 100%;
    margin: 2rem auto;
  }
  @media (min-width: 320px) and (max-width: 599px) {
    margin: 2rem auto;
  }
`

export const Wrapper = styled(Container)``

export const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 2rem 0;
  }
`

export const TopPart = styled(Grid)``

export const BottomPart = styled(Grid)`
  ${"" /* border: 2px solid green; */}
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 0;
`
export const Cards = styled(Grid)`
  display: flex;
  justify-content: space-around;
  border: 2px solid red;
  margin: 0.5rem 2rem;
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.accent1};
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.accent1};
  transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1),
    300ms background-color cubic-bezier(0.4, 0, 0.6, 1),
    300ms color cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);
    color: ${props => props.theme.colors.background1};
  }
`

export const Logo = styled.div`
  color: ${props => props.theme.colors.accent1};
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`

export const Title = styled.p`
  color: ${props => props.theme.colors.accent1};
  font-size: 2rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin: 1rem 0;
`

export const SubTitle = styled.h6`
  font-size: 4rem;
  margin: 2rem 0;
`
export const LinksTitle = styled.a`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent1};
`
