import MovieApp from "../images/movies.png"
import pokedex from "../images/pokedex.png"
import Around from "../images/social.png"
import meetup from "../images/meetup.png"

export const projects = [
  {
    title: "Movie App",
    description:
      "This App is a Reactjs application, using the latest technologies such as react hooks and scss modules to style. This App allows the user to check information about any movie. The movies are extracted from the TMDB API to display details, from trailer to general information. The user can also watch the preview and check the movies' official website if there's any, and they can also go directly to the IMDb to see information about the movie. This App is an update of a previous full-stack application; you can check out the old version when clicking more. ",
    image: MovieApp,
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://github.com/enyelsequeira/movieshook",
    visit: "https://newmovies.netlify.app/movie",
    id: 0,
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
  {
    title: "Github cards",
    description:
      "Github cards was created by me with the help of my mentor to better understand how React Hooks work. This allows the user to search for a github username, and then it returns information about that user, Repositories, followers and so on.",
    image: Around,
    tags: ["JavaScript", "Node", "React", "Axios"],
    source: "https://github.com/enyelsequeira/GitCards",
    visit: "https://enyelsequeira.github.io/GitCards/",
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
]
