import React, { Component } from 'react';

import { Players } from './../api/players';

class Player extends Component {
  render() {
    let {_id, name, score, rank, position} = this.props.player;
    let itemClassName = `item item--position-${rank}`;

    return (
      <div key={_id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">
              {position} place - {score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round"  onClick={() => {
              Players.update(_id , {$inc: {score: 1}});
            }}>+1</button>
            <button className="button button--round"  onClick={() => {
              Players.update(_id, {$inc: {score: -1}});
            }}>-1</button>
            <button className="button button--round"  onClick={() => Players.remove(_id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
export default Player;
