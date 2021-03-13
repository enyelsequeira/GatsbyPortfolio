import React from "react"
import { Fade } from "react-awesome-reveal"
import Card from "../components/Cards"
import Carousel from "../components/Carousel/Carousel"
import { projects } from "../utils/projectsData"

const Projects = () => {
  return (
    <Card id="Projects">
      <Fade damping={0.5} duration={4000}>
        <Card.Wrapper>
        <Card.SectionTittle>My projects</Card.SectionTittle>
          {projects.map(project => (
              <Card.CardContainer key={project.id}>
                <Carousel images={project.images} />
                <Card.ContentTitle>{project.title}</Card.ContentTitle>
                <Card.ContentInfo>
                  <Card.Info>{project.description}</Card.Info>
                  <Card.Tags>
                    <Card.Stack>Stack</Card.Stack>
                    {project.tags.join(", ")}
                  </Card.Tags>
                </Card.ContentInfo>
                <Card.LinkContainer>
                  <Card.Links target="_blank" rel="noopener" href={project.source}>
                    Source
                  </Card.Links>
                  <Card.Links target="_blank" rel="noopener" href={project.visit}>
                    Visit
                  </Card.Links>
                </Card.LinkContainer>
              </Card.CardContainer>
          ))}
        </Card.Wrapper>
      </Fade>
    </Card>
  )
}

export default Projects
