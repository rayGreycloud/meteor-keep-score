import React, { Component } from 'react';

import { Players } from './../api/players';

class Player extends Component {
  render() {
    let _id = this.props.player._id;
    let name = this.props.player.name;
    let score = this.props.player.score;

    return (
      <div key={_id} className="item">
        <p>{name} has {score} point(s).</p>
        <button onClick={() => {
          Players.update(_id , {$inc: {score: 1}});
        }}>+1</button>
        <button onClick={() => {
          Players.update(_id, {$inc: {score: -1}});
        }}>-1</button>
        <button onClick={() => Players.remove(_id)}>X</button>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
export default Player;
