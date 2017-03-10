import React, { Component } from 'react';

import { Players } from './../api/players';

class Player extends Component {
  render() {
    let _id = this.props.player._id;
    let name = this.props.player.name;
    let score = this.props.player.score;

    return (
      <div key={_id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">{score} point(s).</p>
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
