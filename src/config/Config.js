import { Inject } from '../lib/decorators';

export default class Config {

    @Inject('$urlRouterProvider', '$locationProvider')
    static routing($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    }

}
