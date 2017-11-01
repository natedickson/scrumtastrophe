import {observable, useStrict, computed, action} from 'mobx';
import axios from 'axios';
import loader from './Loader';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStore {
    serverUrl = 'http://localhost:8080/';
    // Values marked as 'observable' can be watched by 'observers'
    @observable games = [];
    @observable availablePlayerRoles = [];
    @observable currentGame = {id: 0, gameStateCounter: 0};
    @observable currentPlayer = {name: ''};

    @computed get playerId() { return this.currentPlayer.id; }
    @computed get isInGame() { return this.currentGame.id !== 0; }

    @action setAvailablePlayerRoles = (roles) => {
        this.availablePlayerRoles.replace(roles);
    };
    @action setCurrentGame = (game) => {
        this.currentGame = game;
    };
    @action setPlayer = (player) => {
        this.currentPlayer = player;
    };
    @action setGames = (games) => { this.games = games; };

    @action getPlayer = (playerData) => {
        loader.show();
        axios.post(this.serverUrl + 'player/create', playerData, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            this.setPlayer(response.data);
            loader.hide();
        }, () => {
            loader.hide();
        });
    };

    @action joinGame = (gameId) => {
        loader.show();
        const playerId = this.playerId;
        const data = {
            playerId: playerId,
            gameId: gameId
        };
        axios.patch(this.serverUrl + 'games/join', data, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            if(response.data === null) {
                console.log('no game found');
                return;
            }
            this.setCurrentGame(response.data);
            loader.hide();
        }, (error) => {
            console.log(error);
            loader.hide();
        })
    };

    @action createGame = () => {
        loader.show();
        axios.post(this.serverUrl + 'games/create', this.currentPlayer.id, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            this.setCurrentGame(response.data);
            loader.hide();
        }, (error) => {
            console.log(error);
            loader.hide();
        });
    };

    @action getGames = () => {
        loader.show();
        axios.get(this.serverUrl + 'games').then( (response) => {
            this.setGames(response.data);
            loader.hide();
        }, () => {
            loader.hide();
        });
    };

    @action getAvailablePlayerRoles = () => {
        loader.show();
        axios.get(this.serverUrl + 'player/roles').then( (response) => {
            this.setAvailablePlayerRoles(response.data);
            loader.hide();
        }, (error) => {
            console.log(error);
            loader.hide();
        })
    };
}

const store = new GameStore();

export default store;
export {GameStore};