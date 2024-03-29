import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import WorkIcon from "@material-ui/icons/Work"
import React from "react"
import Social from "../components/Social"

const SocialContainer = () => {
  return (
    <Social>
      <Social.Wrapper>
        <Social.GridContainer>
          <Social.TopPart>
            <Social.Title>Social Media</Social.Title>
            <Social.SubTitle>Let's Be Friends</Social.SubTitle>
          </Social.TopPart>
          <Social.BottomPart>
            <Social.Cards>
              <Social.LinksTitle
                target="_blank"
                rel="noopener"
                href="https://twitter.com/enyelsequeira?lang=en"
              >
                Twitter
              </Social.LinksTitle>
              <Social.Logo>
                <TwitterIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/enyel.sequeira/"
              >
                Facebook
              </Social.LinksTitle>
              <Social.Logo>
                <FacebookIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/e.s.codes/?hl=en"
              >
                Instagram
              </Social.LinksTitle>
              <Social.Logo>
                <InstagramIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle
                target="_blank"
                rel="noopener"
                href="https://github.com/enyelsequeira"
              >
                Github
              </Social.LinksTitle>
              <Social.Logo>
                <GitHubIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/enyel-sequeira-333a60100/"
              >
                LinkedIn
              </Social.LinksTitle>
              <Social.Logo>
                <LinkedInIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle
                href={require("../utils/Enyel_Sequeira_Resume.pdf")}
                download
                target="_blank"
              >
                Resume
              </Social.LinksTitle>
              <Social.Logo>
                <WorkIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
          </Social.BottomPart>
        </Social.GridContainer>
      </Social.Wrapper>
    </Social>
  )
}

export default SocialContainer
