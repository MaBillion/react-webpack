import { observable, action, computed } from 'mobx'

class Store {
    @observable num = 0;

    @computed get getDoubleNum() {
        return this.num * 2
    }

    @action.bound onIncrement() {
        this.num++
    }

    @action.bound onDecrement() {
        this.num--
    }
}

const store = new Store();

export default store;