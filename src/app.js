import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Config from './config/Config';
import home from './components/home';

angular.module('app', [uiRouter, home])
    .config(Config.routing);
