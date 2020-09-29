import styled from "styled-components"
import { Grid } from "@material-ui/core"
import Img from "gatsby-image"
import { motion } from "framer-motion"

export const HeroSection = styled.section`
  width: 80%;
  padding: 1rem 2rem;
  margin: 0 auto;
  background: ${props => props.theme.colors.background1};
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 874px) {
    width: 100%;
  }
`

export const Wrapper = styled(Grid)`
  display: flex;
  justify-content: space-between;
`

export const LeftSection = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 2rem 0;
  }
`

export const RightSection = styled(Grid)`
  display: flex;
  justify-content: center;
  padding-right: 1rem;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 0;
  }
`
export const Title = styled(motion.h2)`
  font-size: 5rem;
  padding-bottom: 1.2rem;
  color: ${props => props.theme.colors.accent1};
`
export const SubTitle = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary1};
`
export const Name = styled(motion.h1)`
  font-size: 8rem;
  padding-bottom: 2rem;
  letter-spacing: 1rem;
  color: ${props => props.theme.colors.primary1};
  @media (min-width: 600px) and (max-width: 1046px) {
    font-size: 6rem;
    letter-spacing: 0.5rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 6rem;
  }
`
export const Picture = styled(Img)`
  border-radius: 40px;
  margin-top: 1rem;
  display: flex;
  box-shadow: 8px 8px 3px 0px rgba(0, 0, 0, 0.75);
`
