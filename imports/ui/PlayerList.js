import React, { Component } from 'react';

import Player from './Player';

class PlayerList extends Component {
  renderPlayers() {
    return this.props.players.map(player => {
      return <Player key={player._id} player={player}/>;
    });
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
