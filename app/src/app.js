// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular.module( 'starter-app', [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 130)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("git", "./assets/svg/git.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('lime');
  })
  .controller('AppController', AppController);



