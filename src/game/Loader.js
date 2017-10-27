import {observable, useStrict, computed, action} from 'mobx';

useStrict(true); //strict mode: observable state only modifiable by actions

class Loader {
    @observable loaderCounter = 0;

    @computed get visible() { return this.loaderCounter > 0; };

    @action show = () => { this.loaderCounter++; };
    @action hide = () => { this.loaderCounter--; };
}

const loader = new Loader();
export default loader;