import React from "react"
import Social from "../components/Social"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailIcon from "@material-ui/icons/Mail"
import WorkIcon from "@material-ui/icons/Work"

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
                href="https://www.linkedin.com/in/enyel-sequeira-333a60100/"
              >
                LinkedIn
              </Social.LinksTitle>
              <Social.Logo>
                <LinkedInIcon style={{ fontSize: 30 }} />
              </Social.Logo>
            </Social.Cards>
            <Social.Cards>
              <Social.LinksTitle href="fontendcv2.pdf" download target="_blank">
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
