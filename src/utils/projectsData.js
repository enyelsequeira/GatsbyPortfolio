import MovieApp from "../images/movies.png"
import pokedex from "../images/pokedex.png"
import Around from "../images/social.png"
import meetup from "../images/meetup.png"

export const projects = [
  {
    title: "Movie App",
    description:
      "This app is a ReactJs application, using the latest technologies, such as hooks, scss modules to style and the most important using AI, I've integrated AI to be able to ask a few simple question, from what does this app do? to others, you can check out the repo for more. The data being used in this app is from TMDB database and the user can see all the information related to each specific movie",
    image: MovieApp,
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://github.com/enyelsequeira/movieshook",
    visit: "https://newmovies.netlify.app/movie",
    id: 0,
  },
  {
    title: "Around The World",
    description:
      "Vanilla Javascript Project, based only in using classes to manipulate the dom, manipulate the data being used. In this app the user can update information about himself, from name to profession and avatar. The user can also add his own card to the DOM, however to delete the cards the user is only able to Delete the cards he added and not the one others users have added. The user can also like others and his own cards",
    image: Around,
    tags: ["JavaScript", "Node", "React", "Axios"],
    source: "https://github.com/enyelsequeira/Social-App",
    visit: "https://enyelsequeira.github.io/Social-App/",
    more: "https://enyelsequeira.github.io/gitcardsCase/",
    id: 2,
  },

  {
    title: "Meetup App",
    description:
      "MeetUp app was created using AWS lambda. It used React TDD process to create. It uses the external Meetup API to fetch events happening in your city and other places according to what you search. The user can search for specific city to see the events going on in that city. ",
    image: meetup,
    tags: ["JavaScript", "Axios", "React", "AWS"],
    visit: "https://enyelsequeira.github.io/meetup/",
    source: "https://github.com/enyelsequeira/meetup",
    more: "https://enyelsequeira.github.io/MeeupCase/",
    id: 3,
  },
  {
    title: "Pokedex App",
    description:
      "Pokedex App, was my very first app created using javascript. This app was created to teach me the fundamental of Javascript. It is a simple app created with an external API to fecth data. The app allows the user to check the first 150 pokemons and see information about each pokemon.",
    image: pokedex,
    tags: ["JavaScript", "CSS", "HTML"],
    source: "https://github.com/enyelsequeira/NewPokedex",
    visit: "https://pokedexv4.netlify.app",
    more: "https://enyelsequeira.github.io/PokedexCase/",
    id: 1,
  },
]
