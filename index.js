// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter1 has a function nested inside of it and keeps keeps track of the count to be used again.  counter2 returns count++ but it is being stored outside the function.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 has a closure becasue it is inside of another function
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *you would use counter1 if you wanted to keep track of the count and add to it. counter2 would just be for a single use.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = () => Math.floor(Math.random() * 2);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numberOfInnings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    home += inning();
    away += inning();
  }
  return {
    Home: home,
    Away: away,
  };
}
finalScore(inning, 9);
// console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
const getInningScore = (inning) => {
  let home = 0;
  let away = 0;
  home += inning();
  away += inning();

  return {
    Home: home,
    Away: away,
  };
};

function scoreboard(getInningScore, inning, numberOfInnings) {
  let score = [];
  for (let i = 0; i < numberOfInnings; i++) {
    score.push(getInningScore(inning));
  }
  let homeTotal = 0;
  let awayTotal = 0;
  for (let i = 0; i < score.length; i++) {
    homeTotal += score[i].Home;
    awayTotal += score[i].Away;
  }
  score.push({
    "Home Total": homeTotal,
    "Away Total": awayTotal,
  });
  return score;
}

scoreboard(getInningScore, inning, 9);
console.log(scoreboard(getInningScore, inning, 9));
