import styled from "styled-components"


export const CardSection = styled.section`
margin-top: 4rem ;
`
export const Wrapper = styled.div`
margin: 0 auto;
max-width: 1280px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
grid-gap: 2rem;
padding: 1rem;
@media (min-width: 320px) and (max-width: 933px) {
display: flex;
flex-direction: column;
}


`
export const GridContainer = styled.div`
`


export const CardContainer = styled.div`
  height: 80rem;
 border: 1px solid ${props => props.theme.colors.accent1};
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background: ${props => props.theme.colors.background1};
  color: ${props => props.theme.colors.primary1};
  box-shadow: 0px 15px 20px rgba(72, 72, 72, 0.1);
  transition: transform 350ms ease;
  margin: 2rem 0;

  &:hover {
    background-color: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    box-shadow: 0px 12px 17px rgba(72, 72, 72, 0.2);
    transform: scale(1.02);
  };
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1rem 0rem;
    width: 100%;
    height: 80rem;
    align-self: center;
    margin: 1rem 0;
  };
  
  @media (min-width: 900px) and (max-width: 946px) {
  height: 85rem;
  }
`
export const ContentTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  color: ${props => props.theme.colors.accent1};
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 0;
  }
  @media (min-width: 950px) and (max-width: 1179px) {
    margin: 0.5rem 0;
  }
`
export const ContentInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   @media (min-width: 320px) and (max-width: 480px) {
     font-size: 1rem;
   }
`
export const Info = styled.p`
   width: 100%;
   font-size: 1.9rem;
   padding: 1rem;
   text-align: justify;
   @media (min-width: 320px) and (max-width: 480px) {
     font-size: 1.8rem;
   }
`
export const Tags = styled.div`
  font-size: 1.8rem;
  word-spacing: 0.2rem;
  margin-top: 2rem;
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0;
    font-size: 2rem;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    margin: 1.5rem 0;
    font-size: 2rem;
  }
`
export const Stack = styled.p`
  color: ${props => props.theme.colors.accent1};
  font-size: 1.8rem;
`
export const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: auto;
  margin-bottom: 1rem;
`
export const Links = styled.a`
  width: fit-content;
  font-weight: 900;
  font-size: 1.35rem;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.accent1};
  background: ${props => props.theme.colors.background2};
  color: ${props => props.theme.colors.accent1};

  border-radius: 3px;
  padding: 1rem 5rem;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.07);

  &:hover {
    box-shadow: inset 0 0 0 4px hsl(243, 80%, 62%);
    color: ${props => props.theme.colors.accent1};
  }
`



export const SectionTittle = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.2rem;
  margin: 2rem 0;
  grid-column: 1 / 3;
  color: ${props => props.theme.colors.accent1};
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 2rem;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 2rem;
  }
`


