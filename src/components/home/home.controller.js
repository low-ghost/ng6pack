import { Inject } from '../../lib/decorators';

@Inject('randomNames')
export default class HomeController {
    constructor(randomNames) {
        this.name = 'World';
        this.randomNames = randomNames;
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.randomNames.getName();
    }
}
