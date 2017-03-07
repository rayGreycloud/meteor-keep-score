import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function () {
  Players.insert({
    name: 'Darth',
    score: '-1'
  });

  console.log(Players.find().fetch());
});
