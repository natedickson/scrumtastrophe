import mobx, {observable, } from 'mobx';
import axios from 'axios';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStore {
    // Values marked as 'observable' can be watched by 'observers'
    @observable games = [];
    @observable currentGame = {};
    @observable currentPlayer = {name: ''};

    @computed get playerId() { return this.currentPlayer.id; }

    @action setPlayer = (player) => { this.currentPlayer = player; };
    @action joinGame = (game) => { this.currentGame = game; };
    @action setGames = (games) => { this.games = games; };
    @action getGames() {
        axios.get('localhost:8080/games').then( response => {
            this.setGames(response.data);
        });
    }
}

const store = new GameStore();

export default store;
export { GameStore };