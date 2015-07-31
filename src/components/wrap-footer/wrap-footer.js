import template from './wrap-footer.html';
import {View, Component} from '../../lib/decorators';

@Component({
    selector: 'wrap-footer'
})
@View({
    template
})
class WrapFooter {
    constructor() {
        this.elementTitle = 'wrap-footer';
        this.counter = 0;
    }

    changeTitle() {
        this.counter += 1;
        this.elementTitle = `it changed ${this.counter} times`;
    }
}

export default WrapFooter.exportModule;
