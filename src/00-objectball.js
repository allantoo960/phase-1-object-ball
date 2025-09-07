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
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
//Think about where in the object you will find a player's points.
//How can you iterate down into that level? Think about the return value of your function.
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
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
//Think about where in the object you will find a player's points.
//How can you iterate down into that level? Think about the return value of your function.



function numPointsScored(playerName) {
//Iterate over each team in the game object
  const game = gameObject();
  for (teamKey in game) {
     const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName].points;
    }
  }
  return null 
}
console.log(numPointsScored("Ben Gordon")); 


//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
//Think about how you will find the shoe size of the correct player.
//How can you check and see if a player's name matches the name that has been passed into the function as an argument?


function shoeSize(playersName){
  const game = gameObject();
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
    if (playersName in team.players) {
      return team.players[playersName].shoe;
    }else{
      return null
  }
}    
}


console.log(shoeSize("Mason Plumlee"));



//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(playersName){
  const game = gameObject();
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
    if (playersName === team.teamName) {
      return team.colors;
    }else if(playersName === team.colors[0] || playersName === team.colors[1]){
      return team.colors;
    }
  }
  return null 
} 
console.log(teamColors("Charlotte Hornets"));


//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
  const game = gameObject();
  const teamNamesArray = [];
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
      teamNamesArray.push(team.teamName);
  }
  return teamNamesArray;
} 
console.log(teamNames());
  
//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team. 
function playerNumbers(teamName){
  const game = gameObject();
  const playerNumbersArray = [];
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
    if (teamName === team.teamName) {
      for (player in team.players) {
        playerNumbersArray.push(team.players[player].number);
      }
    }
  }
  return playerNumbersArray;
} 
console.log(playerNumbers("Brooklyn Nets"));


//Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
function playerStats(playerName){
  const game = gameObject();
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
    if (playerName in team.players) {
      return team.players[playerName];
    }
  }
  return null 
}
console.log(playerStats("Brendan Haywood"));


//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
// Break this one down into steps:
//First, find the player with the largest shoe size
//Then, return that player's number of rebounds
//Remember to think about return values here. 
// Use debugger to drop into your function and understand what it is returning and why.
function bigShoeRebounds(){
  const game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;
//Iterate over each team in the game object
  for (teamArray in game) {
    debugger
     const team = game[teamArray];
      for (player in team.players) {
        debugger
        if (team.players[player].shoe > largestShoeSize) {
          largestShoeSize = team.players[player].shoe;
          rebounds = team.players[player].rebounds;
        }
      }
  }
  return rebounds;
} 
console.log(bigShoeRebounds());
//Which player has the most points? Call the function mostPointsScored
function mostPointsScored(){
  const game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = null;
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
      for (player in team.players) {
        if (team.players[player].points > mostPoints) {
          mostPoints = team.players[player].points;
          playerWithMostPoints = player;
        }
      }
  }
  return playerWithMostPoints;
} 
console.log(mostPointsScored());  
//Which team has the most points? Call the function winningTeam
function winningTeam(){
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
      for (player in team.players) {
        if (teamArray === "home") {
          homeTeamPoints += team.players[player].points;
        }else{
          awayTeamPoints += team.players[player].points;
        }
      }
  }
  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamName;
  }else if(awayTeamPoints > homeTeamPoints){
    return game.away.teamName;
  }else{
    return "It's a tie!";
  }
} 
console.log(winningTeam());  
//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon
function doesLongNameStealATon(){
  const game = gameObject();
  let longestNameLength = 0;
  let playerWithLongestName = null;
  let mostSteals = 0;
  let playerWithMostSteals = null;
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
      for (player in team.players) {
        if (player.length > longestNameLength) {
          longestNameLength = player.length;
          playerWithLongestName = player;
        }
        if (team.players[player].steals > mostSteals) {
          mostSteals = team.players[player].steals;
          playerWithMostSteals = player;
        }
      }
  }
  if (playerWithLongestName === playerWithMostSteals) {
    return true;
  }else{
    return false;  
  } }  
  const key = doesLongNameStealATon("Mason Plumlee");
console.log(key);
//Write a function that returns true if the player with the longest name had the most steals. 
// Call the function doesLongNameStealATon
function doesLongNameStealATon(){
  const game = gameObject();
  let longestNameLength = 0;
  let playerWithLongestName = null;
  let mostSteals = 0;
  let playerWithMostSteals = null;
//Iterate over each team in the game object
  for (teamArray in game) {
     const team = game[teamArray];
      for (player in team.players) {
        if (player.length > longestNameLength) {
          longestNameLength = player.length;
          playerWithLongestName = player;
        }
        if (team.players[player].steals > mostSteals) {
          mostSteals = team.players[player].steals;
          playerWithMostSteals = player;
        }
      }
  }
  if (playerWithLongestName === playerWithMostSteals) {
    return true;
  }else{
    return false;
  }}
const aKey = doesLongNameStealATon("Mason Plumlee");
console.log(aKey);


