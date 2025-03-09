function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 1,
            blocks: 1,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 2,
            blocks: 2,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 1,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 14,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 12,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 28,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 0,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 5,
            slamDunks: 12,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 2,
            steals: 2,
            blocks: 12,
            slamDunks: 1,
          },
        },
      },
    };
  }
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null;
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return null;
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
  }
  
  function teamNames() {
    const game = gameObject();
    const names = [];
    for (const team in game) {
      names.push(game[team].teamName);
    }
    return names;
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        const numbers = [];
        const players = game[team].players;
        for (const player in players) {
          numbers.push(players[player].number);
        }
        return numbers;
      }
    }
    return null;
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null;
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let biggestShoePlayer = null;
  
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        if (players[player].shoe > biggestShoe) {
          biggestShoe = players[player].shoe;
          biggestShoePlayer = player;
        }
      }
    }
    if (biggestShoePlayer) {
      return playerStats(biggestShoePlayer).rebounds;
    }
    return null;
  }
  
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let mostPointsPlayer = null;
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        if (players[player].points > mostPoints) {
          mostPoints = players[player].points;
          mostPointsPlayer = player;
        }
      }
    }
    return mostPointsPlayer;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (const player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    return playerStats(longestName).steals > 0;
  }