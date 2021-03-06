import {observable, useStrict, action} from 'mobx';
import axios from 'axios';
import spinner from '../util/spinner/Spinner';
import toast from '../util/toast/Toast';

useStrict(true); //strict mode: observable state only modifiable by actions

class GameStateStore {
    serverUrl = 'http://192.168.178.164:8080/';
    context = {
        playerId: 0,
        gameId: 0
    };

    sync = false;

    @observable currentState = 0; //this is a (Long), serves as a counter
    @observable availableLoad = 0; //the players available workload for the game
    @observable availableActions = []; //array of action objects that have a label and data about the action
    @observable playerSummaries = []; //to populate the playerlist
    @observable chatLog = []; //to populate the chat box
    @observable sprintStories = {
        backlog: [],
        inDev: [],
        inCodeReview: [],
        inQa: [],
        complete: [],
    }; //to be displayed on the board

    @action setCurrentState = (state) => {
        this.currentState = state;
    };
    @action setAvailableLoad = (load) => {
        this.availableLoad = load;
    };
    @action setPlayerSummaries = (playerSummaries) => {
        this.playerSummaries = playerSummaries;
    };
    @action setChatLog = (chatLog) => {
        this.chatLog = chatLog;
    };
    @action setSprintStories = (stories) => {
        this.sprintStories = stories;
    };
    @action setAvailableActions = (actions) => {
        this.availableActions = actions;
    };

    @action initialize = (gameId, playerId) => {
        spinner.show();
        this.context.gameId = gameId;
        this.context.playerId = playerId;
        axios.get(this.serverUrl + 'game/state?gameId=' + gameId + '&playerId=' + playerId).then((response) => {
            this.setCurrentState(response.data.currentState);
            this.setAvailableLoad(response.data.availableLoad);
            this.setPlayerSummaries(response.data.playerSummaries);
            this.setChatLog(response.data.chatMessages);
            this.setSprintStories(this.sortStories(response.data.sprintStories));
            this.setAvailableActions(response.data.availableActions);
            setTimeout(() => {this.beginSync()}, 1000);
            spinner.hide();
        }, () => {
            spinner.hide();
        });
    };
    @action beginSync = () => {
        this.sync = true;
        this.syncGameState();
    };

    @action sendMessage = (message) => {
        if(message) {
            let messagePayload = {
                playerId: this.context.playerId,
                gameId: this.context.gameId,
                message: message
            };
            axios.post(this.serverUrl + 'game/chat', messagePayload, {headers: {'Content-type': 'application/json'}})
                .then((response) => {
                    this.setChatLog(response.data)
                })
        }
    };

    syncGameState = () => {
        axios.get(this.serverUrl + 'game/state?gameId=' + this.context.gameId + '&playerId=' + this.context.playerId).then((response) => {
            this.setCurrentState(response.data.currentState);
            this.setAvailableLoad(response.data.availableLoad);
            this.setPlayerSummaries(response.data.playerSummaries);
            this.setChatLog(response.data.chatMessages);
            this.setSprintStories(this.sortStories(response.data.sprintStories));
            this.setAvailableActions(response.data.availableActions);
            if(this.sync) {
                setTimeout(() => {this.syncGameState()}, 1000);
            }
        })
    };

    //variables and functions related to completing actions
    @observable needStoryTarget = false;
    storyTargetAction = {};
    @action setNeedStoryTarget = (need) => {
        this.needStoryTarget = need;
    };
    @action doAction = (action) => {
        //TODO: implement
        switch(action.target) {
            case "story":
                this.setNeedStoryTarget(true);
                this.storyTargetAction = action;
                toast.pop("Click a Story");
                break;
            default:
                this.completeAction(action, null);
        }
    };
    completeAction = (action, data) => {
        axios.post(this.serverUrl + this.context.gameId + '/' + this.context.playerId + '/action/' + action.action, data, {headers: {'Content-type' : 'application/json'}});
    };
    targetStory = (storyId) => {
        if(this.needStoryTarget) {
            this.setNeedStoryTarget(false);
            this.completeAction(this.storyTargetAction, storyId);
            this.storyTargetAction = {};
        }
    };
    //{headers: {'Content-type' : 'application/json'}}

    sortStories = (stories) => {
        let sortedStories = {
            backlog: [],
            inDev: [],
            inCodeReview: [],
            inQa: [],
            complete: []
        };
        stories.forEach((story) => {
            if(!story.inProgress) {
                sortedStories.backlog.push(story);
            } else if(story.dev > 0) {
                sortedStories.inDev.push(story);
            } else if(story.cr > 0) {
                sortedStories.inCodeReview.push(story);
            } else if(story.qa > 0) {
                sortedStories.inQa.push(story);
            } else {
                sortedStories.complete.push(story);
            }
        });
        return sortedStories;
    }
}

const gameStateStore = new GameStateStore();

export default gameStateStore;
export {GameStateStore};