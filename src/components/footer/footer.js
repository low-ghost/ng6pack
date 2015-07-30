import template from './footer.html';
import {View, Component} from '../../lib/decorators';

@Component({
    selector: 'footer'
})
@View({ template })
class Footer {
    constructor() {
        console.log("here")
        this.copyrightDate = new Date();
    }
}

export default Footer.exportModule;
