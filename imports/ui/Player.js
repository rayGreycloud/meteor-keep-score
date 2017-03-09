import React, { Component } from 'react';

import { Players } from './../api/players';

class Player extends Component {

    render() {
      return (
        <p>
          player.name has score point(s). [+1] [-1] [X]
        </p>
      );
    }
}

export default Player;
