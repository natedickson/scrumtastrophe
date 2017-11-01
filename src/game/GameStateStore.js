import {observable, useStrict, action} from 'mobx';
// import axios from 'axios';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStateStore {
    @observable currentState; //this is a (Long), serves as a counter
    @observable availableLoad; //the players available workload for the game
    @observable playerSummaries; //to populate the playerlist

    @action initialize = (initialState) => {
        this.currentState = initialState.currentState;
        this.availableLoad = initialState.availableLoad;
        this.playerSummaries = initialState.playerSummaries;
    }
}

const gameStateStore = new GameStateStore();

export default gameStateStore;
export {GameStateStore};