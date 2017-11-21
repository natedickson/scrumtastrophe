import {observable, useStrict, computed, action} from 'mobx';

useStrict(true); //strict mode: observable state only modifiable by actions

class Spinner {
    @observable spinnerCounter = 0;

    @computed get visible() { return this.spinnerCounter > 0; };

    @action show = () => { this.spinnerCounter++; };
    @action hide = () => { this.spinnerCounter--; };
}

const spinner = new Spinner();
export default spinner;