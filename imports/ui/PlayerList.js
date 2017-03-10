import React, { Component } from 'react';

import Player from './Player';

class PlayerList extends Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p>Add your first player to get started</p>
        </div>
      )
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player}/>;
      });
    }
  };

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};

export default PlayerList;
