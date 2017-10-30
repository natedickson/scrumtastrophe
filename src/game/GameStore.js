import {observable, useStrict, computed, action} from 'mobx';
import axios from 'axios';
import loader from './Loader';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStore {
    serverUrl = 'http://localhost:8080/';
    // Values marked as 'observable' can be watched by 'observers'
    @observable games = [];
    @observable currentGame = {id: 0};
    @observable currentPlayer = {name: ''};

    @computed get playerId() { return this.currentPlayer.id; }

    @action setPlayer = (player) => { this.currentPlayer = player; };
    @action getPlayer = (playerName) => {
        loader.show();
        axios.post(this.serverUrl + 'player/create',playerName).then( (response) => {
            this.setPlayer(response.data);
            loader.hide();
        }, () => {
            loader.hide();
        });
    };
    @action joinGame = (game) => { this.currentGame = game; };
    @action createGame = () => {
        loader.show();
        axios.post(this.serverUrl + 'games/create', this.currentPlayer.id, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            this.joinGame(response.data);
            loader.hide();
        }, (error) => {
            console.log(error);
            loader.hide();
        });
    }
    @action setGames = (games) => { this.games = games; };
    @action getGames() {
        loader.show();
        axios.get(this.serverUrl + 'games').then( response => {
            this.setGames(response.data);
            loader.hide();
        }, () => {
            loader.hide();
        });
    };
}

const store = new GameStore();

export default store;
export { GameStore };