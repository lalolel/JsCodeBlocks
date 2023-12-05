const team = {
  _players: [
    { firstName: "Mink", lastName: "TheCat", age: 999 },
    { firstName: "Yink", lastName: "TheYat", age: 666 },
    { firstName: "Sink", lastName: "TheSat", age: 333 },
  ],
  _games: [
    { opponent: "CitMinks", teamPoints: 99, opponentPoints: 01 },
    { opponent: "Dogs", teamPoints: 88, opponentPoints: 02 },
    { opponent: "Birds", teamPoints: 77, opponentPoints: 03 },
  ],
  // binds a method to a property (players to a property)
  //method called players to retrieve the _players property
  get players() {
    // return the _players property
    return this._players;
  },
  // method called games to retrieve the _games property
  get games() {
    // return the _games property
    return this._games;
  },
  // .addPlayer() method to the team object

  addPlayer(newFirstName, newLastName, NewAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: NewAge,
    };
    // adds the player object to the team‘s _players array using push array method
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
// using the method to add a new player
team.addPlayer("Wink", "theWat", 111);
console.log(team.players);
// using the method to add a new game
team.addGame("CitMinks", 89, 80);
console.log(team.games);

// populating means filling objects with data
