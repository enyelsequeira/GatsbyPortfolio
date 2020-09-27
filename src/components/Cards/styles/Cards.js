import styled from "styled-components"
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  CardMedia,
  Container,
} from "@material-ui/core"

export const CardSection = styled.section`
  padding: 1rem 1rem;
`

export const Wrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`
export const GridContainer = styled(Grid)`
  border: 2px solid red;
  padding: 10px 15px;
`

export const CardContainer = styled(Card)`
  height: 49rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 4rem;

  background: ${props => props.theme.colors.background1};
  color: ${props => props.theme.colors.primary1};
  box-shadow: 0px 15px 20px rgba(72, 72, 72, 0.1);
  transition: transform 350ms ease;

  &:hover {
    background-color: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    box-shadow: 0px 12px 17px rgba(72, 72, 72, 0.2);
    transform: scale(1.02);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1rem 2rem;
  }
`

export const ContentInfo = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  flex: 0 45%;
`

export const ContentTitle = styled.h1`
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 4rem;
`
export const Info = styled.p`
  width: 95%;
  font-size: 1.5rem;
  line-height: 2rem;
`

export const LinkContainer = styled(CardActions)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 10%;
`
export const DividerLine = styled(Divider)``

export const Picture = styled.img`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex: 0 45%;

  & > * {
    flex-grow: 1;
  }
`

export const Links = styled.a`
  width: 150px;
  font-weight: 900;
  font-size: 1.35rem;

  background: ${props => props.theme.colors.accent1};
  color: ${props => props.theme.colors.background1};
  border-radius: 3px;
  padding: 1.1rem;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.07);

  &:hover,
  &:focus {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`
