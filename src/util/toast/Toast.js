import {observable, useStrict, action} from 'mobx';

useStrict(true); //strict mode: observable state only modifiable by actions

class Toast {
    @observable toasts = ["Welcome you ignorant"];

    @action pop = (text) => {
        this.toasts.push(text);
    };
    @action eat = () => {
        this.toasts.pop();
    };
}

const toast = new Toast();
export default toast;