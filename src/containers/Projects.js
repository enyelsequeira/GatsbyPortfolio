import React from "react"
import Card from "../components/Cards"

import { projects } from "../utils/projectsData"

const Projects = () => {
  return (
    <Card id="Projects">
      <Card.Wrapper>
        {projects.map(project => (
          <Card.GridContainer>
            <Card.CardContainer key={project.id}>
              <Card.Picture src={project.image} />
              <Card.ContentInfo>
                <Card.ContentTitle>{project.title}</Card.ContentTitle>
                <Card.Info>{project.description}</Card.Info>
                <Card.LinkContainer>
                  <Card.Links target="_blank" href={project.source}>
                    Source
                  </Card.Links>
                  <Card.Links target="_blank" href={project.visit}>
                    Visit
                  </Card.Links>
                </Card.LinkContainer>
              </Card.ContentInfo>
            </Card.CardContainer>
          </Card.GridContainer>
        ))}
      </Card.Wrapper>
    </Card>
  )
}

export default Projects
