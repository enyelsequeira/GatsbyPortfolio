import { motion } from "framer-motion";
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from "styled-components";

export const HeroSection = styled.section`
  // padding: 1rem 2rem;
  // margin: 0 auto;
  // background: ${props => props.theme.colors.background1};
  // @media ${props => props.theme.breakpoints.mobile} {
  //   width: 100%;
  // }
  // @media (min-width: 600px) and (max-width: 874px) {
  //   width: 100%;
  // }
`

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 0 auto;
  background: ${props => props.theme.colors.background1};
  @media ${props => props.theme.breakpoints.mobile} {
   flex-direction: column
  };
  @media (min-width: 508px) and (max-width: 599px) {
   flex-direction: column;
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 2rem 0;
  }
`

export const RightSection = styled.div`
max-width: 50%;
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 600px) {
  max-width: 100%;

    text-align: center;
    margin: 0 auto;
    padding: 0;
  }
`


export const Picture = styled(GatsbyImage)`
  border-radius: 40px;
  max-width: 100%;
  margin-top: 1rem;
  display: flex;
  box-shadow: 8px 8px 3px 0px rgba(0, 0, 0, 0.75);
`


export const Title = styled(motion.h2)`
  font-size: 5rem;
  padding-bottom: 1.2rem;
  color: ${props => props.theme.colors.accent1};
`
export const SubTitle = styled(motion.h2)`
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
