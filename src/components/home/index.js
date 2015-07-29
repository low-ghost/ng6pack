import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeRouter from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames';

export default angular.module('app.home', [uiRouter, randomNames])
  .config(HomeRouter.routes)
  .controller('HomeController', HomeController)
  .name;
