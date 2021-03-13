import styled from "styled-components"

export const SocialSection = styled.section`
  margin: 5rem auto;
  background: ${props => props.theme.colors.background1};

`

export const Wrapper = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 1rem;
`

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 2rem 0;
  }
`

export const TopPart = styled.div``

export const BottomPart = styled.div`
max-width: 100%;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding: 0;
  display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  @media (min-width: 320px) and (max-width: 600px){
  display: flex;
  flex-direction: column;
  }
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  
  margin: 0.5rem 2rem;
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.accent1};

  transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1),
    300ms background-color cubic-bezier(0.4, 0, 0.6, 1),
    300ms color cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    box-shadow: inset 0 0 0 2px hsl(243, 80%, 62%);
    color: ${props => props.theme.colors.background1};
  };
  padding: 2rem;
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

export const SubTitle = styled.p`
  font-size: 4rem;
  margin: 2rem 0;
`
export const LinksTitle = styled.a`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accent1};
`
