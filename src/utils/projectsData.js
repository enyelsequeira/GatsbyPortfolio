//Movies

import movie1 from "../images/movies1.png"
import movie2 from "../images/movies2.png"
import movie3 from "../images/movies3.png"

// Unitech

import unitech1 from "../images/unitech1.png"
import unitech2 from "../images/unitech2.png"
import unitech3 from "../images/unitech3.png"

// Around

import around1 from "../images/news1.png"
import around2 from "../images/news2.png"
import around3 from "../images/news3.png"

//Unitech Site 2
import secondSite1 from "../images/unitechsite2png.png"
import secondSite2 from "../images/unitechsite21.png"
import secondSite3 from "../images/unitechsite23.png"

// Iterative project
import iterative1 from "../images/iterative1.png"
import iterative2 from "../images/iterative2.png"
import iterative3 from "../images/iterative3.png"


export const projects = [
  {
    title: "Iterative.AI",
    description:
      "Iterative.ai, a data science and machine learning version control platform, came to us wanting a new static landing page built with Gatsby.\n" +
      "\n" +
      "With two other developers we were able to develop and ship this site in about 3 weeks. We organized tasks on Trello and collaborated via Github to pull all the components together.\n" +
      "\n" +
      "We decided to use Styled Components as this design framework pairs nicely with Gatsby.",
    images: [
      { image: iterative1, title: "Homepage" },
      { image: iterative2, title: "About" },
      { image: iterative3, title: "Details" },
    ],
    tags: ["React", "Gatsby", "StyledComponents"],
    source: "https://iterative.ai",
    visit: "https://iterative.ai",
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
    id: 2,
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
    id: 1,
  },
  {
    title: "News Explorer",
    description:
      "This is a full-stack application, using nodeJs as backend, and React for the front-end. This app allows user to register and it deals with authentication in the backend as well fronted. It allows user to search for latest new and save them to their own profile. The user can also delete the news from saved. This is an ongoing project and will be updated to use best practices in the field and TypeScript.",
    images: [
      { image: around1, title: "Homepage" },
      { image: around2, title: "Editing" },
      { image: around3, title: "Validation" },
    ],
    tags: ["React", "Node", "AWS", "Validation"],
    source: "https://github.com/enyelsequeira/news-explorer-frontend",
    visit: "https://news-explorer.vercel.app/",
    id: 4,
  },


]
