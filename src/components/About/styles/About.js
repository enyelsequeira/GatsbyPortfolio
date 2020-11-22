import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const AboutSection = styled.section`
  margin-top: 5rem;
`
export const ContainerSection = styled.div`

max-width: 1280px;
margin: 0 auto;
  background: ${props => props.theme.colors.background2};
`

export const Wrapper = styled.div`
display: flex;


  @media (min-width: 320px) and (max-width: 499px) {
  flex-direction: column;
  padding: 1rem;
  }
  @media (min-width: 500px) and (max-width: 920px) {
    display: flex;
    flex-direction: column;
      padding: 1rem;

  }
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  @media (min-width: 320px) and (max-width: 850px) {

    align-self: center;
    margin: 0;
    max-width: 100%;
  }
  @media (min-width: 851px) and (max-width: 960px) {
    align-self: center;
  }
`
export const RightSection = styled.div`
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
  max-width: 100%;
  @media (min-width: 320px) and (max-width: 959px) {
    margin-top: 2rem;
  }
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
  margin-bottom: 1.2rem;

  &:hover {
    box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);
    color: ${props => props.theme.colors.accent1};
    cursor: pointer;
  }
`
export const BolderCharacter = styled.b`
  color: ${props => props.theme.colors.accent1};
`
