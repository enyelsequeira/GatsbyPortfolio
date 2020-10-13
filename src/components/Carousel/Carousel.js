import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as Images } from "react-responsive-carousel"

import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
`
const Container = styled(Images)`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`

const Description = styled.p`
  color: hsl(34.9, 98.6%, 72.9%);
  font-size: 2rem;
`

const Carousel = ({ images }) => {
  return (
    <Container infiniteLoop useKeyboardArrows autoPlay>
      {images.map(({ image, title }) => (
        <Wrapper key={title}>
          <img
            style={{
              borderRadius: "10px",
            }}
            src={image}
            alt={title}
          />
          <Description>{title}</Description>
        </Wrapper>
      ))}
    </Container>
  )
}

export default Carousel
