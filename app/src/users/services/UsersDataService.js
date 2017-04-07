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
      avatar: 'robot',
      content: 'I am Front-end/JS developer.Objective Looking for a job as Front-end/JavaScript developer. ' + ('\n') +
      'Good theoretical knowledge of JavaScript (incl. ES6), HTML/CSS.' + ('\n') + ('\n') +
      'Experience in front-end development, building applications with MeteorJS and ReactJS, AngularJS frameworks. ' + ('\n') +
      'Experience in back-end development (NodeJS, MongoDB, MySQL).' + ('\n') + ('\n') +
      'Good analytical and communication skills, ability to work under pressure and meet deadlines,highly responsible and attentive to details.'
    },
      {
          name: 'My skills',
          avatar: 'lamp',
          content: "Programming Languages:" + ('\n') +
          " * JavaScript" + ('\n') +
          " * HTML/CSS/SASS." + ('\n') +
          ('\n') +
          "Frameworks/Libraries" + ('\n') +
          " * React JS" + ('\n') +
          " * MeteorJS" + ('\n') +
          " * Angular JS" + ('\n') +
          " * MongoDB" + ('\n') +
          " * jQuery" + ('\n') +
          " * Node JS" + ('\n') +
          " * Bootstrap & React-Bootstrap " + ('\n') +
          " * Material design and materialize css" + ('\n') +
          " * Socket.io " + ('\n') +
          " * Wordpress " + ('\n') +
          ('\n') +
          "Development Tools:" + ('\n') +
          " * Git" + ('\n') +
          " * Web/PhpStorm" + ('\n') +
          " * Gulp" + ('\n') +
          " * Heroku" + ('\n') +
          " * Sublime Text" + ('\n') +
          " * PhotoShop" + ('\n') +
          " * Gimp" + ('\n') +
          " * Avocode" + ('\n') +
          "   and other"
      },
    {
      name: 'Zlata Son',
      avatar: 'flower1',
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

