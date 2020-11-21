import platformgame from 'images/platformgame.png';
import Weather from 'images/weatherapp.png';
import Restaurant from 'images/restaurant-page.png';
import Transactions from 'images/rails-capstone.png';
import Newsweek from 'images/newsweek.png';
import Socialmedia from 'images/socialmedia.png';
import privateevents from 'images/privateevents.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
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
    title: 'Restaurant Page',
    description:
      'A simple restaurant webpage which has 3 navigations with unique content. All the content of this app is rendered using javascript only.',
    skills: ['HTML5', 'CSS3', 'Webpack', 'JavaScript(ES6)', 'Bootstrap'],
    image: Restaurant,
    links: {
      github: 'https://github.com/tGodson/Restaurant-page',
      preview: 'http://tGodson.github.io/Restaurant-page',
    },
  },
  {
    title: 'NewsWeek Magazine',
    description:
      'This is a Clone of the NewsWeek Magazine UI/UX. The structure and layout is built using Bootstrap and taking into consideration 4 screen sizes(mobile, tablet, laptop,large screen).',
    skills: [
      'HTML5',
      'CSS3',
      'Bootstrap'
    ],
    image: Newsweek,
    links: {
      github: 'https://github.com/tGodson/Newsweek-Clone',
      preview: 'https://rawcdn.githack.com/tGodson/Newsweek-Clone/572ac6737cd9fe4fa9e80b492ba92d54b09507a3/index.html',
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
