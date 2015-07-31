import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeRouter from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames';
import Footer from '../footer/footer';
import WrapFooter from '../wrap-footer/wrap-footer';

export default angular.module('app.home', [uiRouter, randomNames, Footer, WrapFooter])
  .config(HomeRouter.routes)
  .controller('HomeController', HomeController)
  .name;
