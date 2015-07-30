import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeRouter from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames';
import Footer from '../footer/footer';

export default angular.module('app.home', [uiRouter, randomNames, Footer])
  .config(HomeRouter.routes)
  .controller('HomeController', HomeController)
  .name;
