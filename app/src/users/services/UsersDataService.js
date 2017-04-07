/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
      name: 'About me :-)',
      avatar: 'svg-1',
      content: 'I like beer and I like cheese :-)))'
    },
    {
      name: 'I am WEB developer',
      avatar: 'svg-6',
      content: 'I am Front-end/JS develope. Objective Looking for a job as Front-end/JavaScript developer. Good theoretical knowledge of JavaScript (incl. ES6), HTML/CSS.Experience in front-end development, building single page applications with AngularJS andReactJS frameworks. Experience in back-end development (NodeJS, MongoDB, SQL DB).Good analytical and communication skills, ability to work under pressure and meet deadlines,highly responsible and attentive to details.'
    },
      {
          name: 'My skills',
          avatar: 'svg-18',
          content: "Programming Languages * JavaScript * HTML/CSS. Frameworks/Libraries * Angular JS * React JS *  MeteorJS * MongoDB * Bootstrap * jQuery * Node JS * SASS * Wordpress * Flexbox. Development Tools * Git * Web/PhpStorm * Gulp * Heroku * Sublime Text * PhotoShop * Gimp * Avocode and other"
      },
    {
      name: 'Zlata Son',
      avatar: 'svg-20',
      content: 'The End :-)'
    },
  ];

  // Promise-based API
  return {
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];

