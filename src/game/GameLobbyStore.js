import {observable, useStrict, computed, action} from 'mobx';
import axios from 'axios';
import spinner from '../util/spinner/Spinner';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStore {
    serverUrl = 'http://192.168.178.164:8080/';
    // Values marked as 'observable' can be watched by 'observers'
    @observable games = [];
    @observable availablePlayerRoles = [];
    @observable currentGame = {id: 0};
    @observable currentPlayer = {name: ''};

    @computed get isPlayer() { return this.currentPlayer.name !== ''; }
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
        spinner.show();
        axios.post(this.serverUrl + 'player/create', playerData, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            this.setPlayer(response.data);
            spinner.hide();
        }, () => {
            spinner.hide();
        });
    };

    @action joinGame = (gameId) => {
        spinner.show();
        const playerId = this.playerId;
        const data = {
            playerId: playerId,
            gameId: gameId
        };
        axios.patch(this.serverUrl + 'games/join', data, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            if(typeof response.data === "undefined" || response.data === null) {
                console.log('no game found');
                return;
            }
            this.setCurrentGame(response.data);
            spinner.hide();
        }, (error) => {
            console.log(error);
            spinner.hide();
        })
    };

    @action createGame = () => {
        spinner.show();
        axios.post(this.serverUrl + 'games/create', this.currentPlayer.id, {headers: {'Content-type' : 'application/json'}}).then( (response) => {
            this.setCurrentGame(response.data);
            spinner.hide();
        }, (error) => {
            console.log(error);
            spinner.hide();
        });
    };

    @action getGames = () => {
        spinner.show();
        axios.get(this.serverUrl + 'games').then( (response) => {
            this.setGames(response.data);
            spinner.hide();
        }, () => {
            spinner.hide();
        });
    };

    @action getAvailablePlayerRoles = () => {
        spinner.show();
        axios.get(this.serverUrl + 'player/roles').then( (response) => {
            this.setAvailablePlayerRoles(response.data);
            spinner.hide();
        }, (error) => {
            console.log(error);
            spinner.hide();
        })
    };
}

const gameStore = new GameStore();

export default gameStore;
export {GameStore};