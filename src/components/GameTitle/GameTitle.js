import React, {Component} from 'react';
import './GameTitle.css';
import title from './title.png';

export default class GameTitle extends Component {
    render() {
        return (
            <div className="game-title">
                <img src={title} alt="Scrumtastrophe"/>
            </div>
        );
    }
}
