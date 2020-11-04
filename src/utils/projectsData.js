//Movies

import movie1 from "../images/movies1.png"
import movie2 from "../images/movies2.png"
import movie3 from "../images/movies3.png"

// Unitech

import unitech1 from "../images/unitech1.png"
import unitech2 from "../images/unitech2.png"
import unitech3 from "../images/unitech3.png"

// Around

import around1 from "../images/around1.png"
import around2 from "../images/around2.png"
import around3 from "../images/around3.png"

//Unitech Site 2
import secondSite1 from "../images/unitechsite2png.png"
import secondSite2 from "../images/unitechsite21.png"
import secondSite3 from "../images/unitechsite23.png"

export const projects = [
  {
    title: "Movie App",
    description:
      "This app is a ReactJs application, using the latest technologies, such as hooks, scss modules to style and the most important using AI, I've integrated AI to be able to ask a few simple question, from what does this app do? to others, you can check out the repo for more. The data being used in this app is from TMDB database and the user can see all the information related to each specific movie",
    images: [
      { image: movie1, title: "Homepage" },
      { image: movie2, title: "Dark Mode" },
      { image: movie3, title: "Page Details" },
    ],
    tags: ["React", "Redux", "Router", "Scss"],
    source: "https://github.com/enyelsequeira/movieshook",
    visit: "https://newmovies.netlify.app/movie",
    id: 0,
  },
  {
    title: "Unitech Pest Control",
    description:
      "This was my first real project/client for a pest control company based in Saint Louis, Missouri. Working with a partner we decided to build this site with the latest technologies out there. We were able to increase the SEO by using tools provided by gatsby. Got a good feedback from the company that they've decided to go with us to build another site for them. Work in progress at the moment",

    images: [
      { image: unitech1, title: "Homepage" },
      { image: unitech2, title: "Calendar" },
      { image: unitech3, title: "Booking" },
    ],
    tags: ["Gatsby", "Graphql", "StyledComponents", "Material"],
    source: "https://unitechpest.com/",
    visit: "https://unitechpest.com/",
    id: 1,
  },
  {
    title: "Unitech Pest Control",
    description:
      "After receiving positive feedback, the company decided to rebuild the main site they were using. This site was created using technologies that makes it easy for the company to change anything they want as it is integrated with contentful, querying the data with graphql they can change everything as they liked. Beyond that, the site is using the best SEO techniques out there ranking pretty high up on google search. ",
    images: [
      { image: secondSite1, title: "Homepage" },
      { image: secondSite2, title: "Information" },
      { image: secondSite3, title: "Scheduling" },
    ],
    tags: ["Gatsby", "Graphql", "Contentful", "StyledComponents"],
    visit: "https://stlouispestexterminator.com/",
    source: "https://stlouispestexterminator.com/",
    id: 3,
  },
  {
    title: "Around The World",
    description:
      "Vanilla Javascript Project, based only in using classes to manipulate the dom, manipulate the data being used. In this app the user can update information about himself, from name to profession and avatar. The user can also add his own card to the DOM, however to delete the cards the user is only able to Delete the cards he added and not the one others users have added. The user can also like others and his own cards",
    images: [
      { image: around1, title: "Homepage" },
      { image: around2, title: "Editing" },
      { image: around3, title: "Validation" },
    ],
    tags: ["JavaScript", "Css", "Api", "Validation"],
    source: "https://github.com/enyelsequeira/Social-App",
    visit: "https://enyelsequeira.github.io/Social-App/",
    id: 2,
  },


]
