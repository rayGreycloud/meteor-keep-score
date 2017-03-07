import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Darth',
  score: -1
}, {
  _id: '2',
  name: 'Yoda',
  score: 101
}, {
  _id: '3',
  name: 'Obi-wan',
  score: 99
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
};

Meteor.startup(function () {
  let title = "Scorekeeper";
  let name = 'Darth';
  let jsx = (
    <div>
      <h2>{title}</h2>
      <p>Hello {name}!</p>
      {renderPlayers(players)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
