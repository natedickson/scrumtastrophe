import {observable, useStrict, action} from 'mobx';
import axios from 'axios';
import loader from './Loader';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStateStore {
    serverUrl = 'http://localhost:8080/';
    gameId = 0;
    playerId = 0;
    sync = false;

    @observable currentState = 0; //this is a (Long), serves as a counter
    @observable availableLoad = 0; //the players available workload for the game
    @observable playerSummaries = []; //to populate the playerlist

    @action setCurrentState = (state) => {
        this.currentState = state;
    };
    @action setAvailableLoad = (load) => {
        this.availableLoad = load;
    };
    @action setPlayerSummaries = (playerSummaries) => {
        this.playerSummaries = playerSummaries;
    };

    @action initialize = (gameId, playerId) => {
        loader.show();
        this.gameId = gameId;
        this.playerId = playerId;
        axios.get(this.serverUrl + 'game/state?gameId=' + gameId + '&playerId=' + playerId).then((response) => {
            this.setCurrentState(response.data.currentState);
            this.setAvailableLoad(response.data.availableLoad);
            this.setPlayerSummaries(response.data.playerSummaries);
            setTimeout(() => {this.beginSync()}, 1000);
            loader.hide();
        }, () => {
            loader.hide();
        });
    };
    @action beginSync = () => {
        this.sync = true;
        this.syncGameState();
    };

    syncGameState = () => {
        axios.get(this.serverUrl + 'game/state?gameId=' + this.gameId + '&playerId=' + this.playerId).then((response) => {
            this.setCurrentState(response.data.currentState);
            this.setAvailableLoad(response.data.availableLoad);
            this.setPlayerSummaries(response.data.playerSummaries);
            if(this.sync) {
                setTimeout(() => {this.syncGameState()}, 1000);
            }
        })
    }
    //{headers: {'Content-type' : 'application/json'}}
}

const gameStateStore = new GameStateStore();

export default gameStateStore;
export {GameStateStore};