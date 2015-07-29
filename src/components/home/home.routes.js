import { Inject } from '../../lib/decorators';
import template from './home.html';

export default class HomeRouter {

    @Inject('$stateProvider')
    static routes($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          template,
          controller: 'HomeController',
          controllerAs: 'home'
        });
    }

}
