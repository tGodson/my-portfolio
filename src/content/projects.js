import platformgame from 'images/platformgame.png';
import Weather from 'images/weatherapp.png';
import Bookstore from 'images/bookstore.png';
import Dog from 'images/dog-shop.png';
import Transactions from 'images/rails-capstone.png';
import Car from 'images/car_rental.png';
import Socialmedia from 'images/socialmedia.png';
import privateevents from 'images/privateevents.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Car Rental',
    description:
      'A web app for renting cars where user can mark car as favourite and also click on a specific car to view details. Built with React.js on the frontend and Ruby on Rails on the backend',
    skills: ['HTML5', 'CSS3', 'Sass', 'ES6', 'React.js', 'Redux', 'Ruby on Rails', 'axios', 'Eslint', 'postgreSQL', 'Rspec', 'Jest', 'Heroku'],
    image: Car,
    links: {
      github: 'https://github.com/tGodson/car-rental-react',
      preview: 'https://car-rentals-react.herokuapp.com/',
    },
  },
  {
    title: 'Phaser Platform Game',
    description:
      'A video game built with phaser 3 where the player has to control the game character to jump from one platform to another while picking up coins and avoiding bombs',
    skills: ['HTML5', 'CSS3', 'Sass', 'ES6', 'Phaser 3', 'Webpack', 'Jest'],
    image: platformgame,
    links: {
      github: 'https://github.com/tGodson/platform-game',
      preview: 'http://tGodson.github.io/platform-game',
    },
  },
  {
    title: 'Dog Shop',
    description:
      'A web app of dog and their skill where items can be filtered by breed or searched by breed name. Built with React.js and Redux.',
    skills: ['HTML5', 'CSS3', 'React.js', 'Redux', 'Jest', 'Eslint', 'Github Pages', 'Bootstrap'],
    image: Dog,
    links: {
      github: 'https://github.com/tGodson/Dog-shop',
      preview: 'https://tGodson.github.io/Dog-shop/',
    },
  },
  {
    title: 'Group Transactions',
    description:
      'This Ruby-on-Rails project is an app for grouping payments by goal with your family/friends.',
    skills: ['HTML5', 'CSS3', 'Ruby on Rails', 'Bootstrap', 'postgreSQL', 'Capybara', 'Rspec'],
    image: Transactions,
    links: {
      github: 'https://github.com/tGodson/rails-capstone',
      preview: 'https://mysterious-waters-29267.herokuapp.com/',
    },
  },
  {
    title: 'Weather App',
    description:
      'A weather forecast site which tells you the weather condition of any place in the world using the weather API. All you need to do is to input the name of the place in the search box and press the enter button on your keyboard.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript(ES6)',
      'Bootstap',
      'Webpack',
      'OpenweatherAPI'
    ],
    image: Weather,
    links: {
      github: 'https://github.com/tGodson/Weather_app',
      preview: 'http://tGodson.github.io/Weather_app',
    },
  },
  {
    title: 'Bookstore CMS',
    description:
      'A fast, dynamic and responsive front-end application built with React and Redux that helps to organize and manage a bookstore.',
    skills: ['HTML5', 'CSS3', 'React.js', 'Redux', 'Jest', 'Eslint', 'Heroku', 'Bootstrap'],
    image: Bookstore,
    links: {
      github: 'https://github.com/tGodson/react-redux-app',
      preview: 'https://arcane-dawn-43039.herokuapp.com/',
    },
  },
  {
    title: 'Social Media App',
    description:
      'This project is about building a social media platform where logged-In users can write a post, follow and unfollow other signed-Up users. Guest users will only be able to see post.',
    skills: ['HTML5', 'CSS3', 'Ruby on Rails', 'Bootstrap', 'postgreSQL', 'Capybara', 'Rspec'],
    image: Socialmedia,
    links: {
      github: 'https://github.com/tGodson/ror-social-scaffold',
      preview: 'https://social-media-website-1.herokuapp.com/',
    },
  },
  {
    title: "Private Events",
    description:
      'This project is about building an Event platform where only Users who are signed-In can create an event and invite others while those who are not signed-In can only view events.',
    skills: ['HTML5', 'CSS3', 'Ruby on Rails', 'Bootstrap', 'postgreSQL', 'Capybara', 'Rspec'],
    image: privateevents,
    links: {
      github: 'https://github.com/tGodson/private-events',
      preview: 'https://mysterious-waters-29267.herokuapp.com/',
    },
  },
];
