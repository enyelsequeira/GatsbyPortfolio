import styled from "styled-components"
import { Grid, Container } from "@material-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const AboutSection = styled.section`
  margin-top: 5rem;
`
export const ContainerSection = styled(Container)`
  ${"" /* border: 1px solid red; */}
`

export const Wrapper = styled(Grid)`
  ${"" /* height: 80vh; */}
  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid green;
  }
  @media (min-width: 600px) and (max-width: 850px) {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
  }
`

export const LeftSection = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) and (max-width: 850px) {
    align-self: center;
  }
  @media (min-width: 851px) and (max-width: 960px) {
    align-self: center;
  }
`
export const RightSection = styled(Grid)`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  padding-left: 5rem;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
  }
  @media (min-width: 481px) and (max-width: 599px) {
    padding: 0;
  }
`
export const Picture = styled(Img)`
  border: 1px solid red;
  width: 500px;
`

export const Title = styled.h2`
  font-size: 6rem;
  margin: 4rem 0;
`
export const SubTitle = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  color: ${props => props.theme.colors.accent1};
  font-weight: bolder;
  letter-spacing: 0.2rem;
`
export const Description = styled.p`
  font-size: 2.3rem;
  margin-bottom: 3.2rem;
  line-height: 30px;
`
export const Button = styled(Link)`
  width: 50%;
  display: flex;
  align-self: center;
  justify-content: center;
  position: relative;
  height: fit-content;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.8rem 1rem;
  margin-right: 1.2rem;
  background: transparent;
  color: ${props => props.theme.colors.primary1};
  border-radius: 0.5rem;
  border: 0.1rem solid ${props => props.theme.colors.accent1};
  transition: 250ms;
  margin-top: 4rem;

  &:hover,
  &:focus {
    &:hover {
      box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);
      color: ${props => props.theme.colors.accent1};
    }
  }
`
