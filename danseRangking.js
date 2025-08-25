function denseRangkin(leaderboard, gitsScores){
  let uniqueScores = [...new Set(leaderboard)];

  let result = [];


  for (let score of gitsScores){
    let rank = 1;
    while (rank <= uniqueScores.length && score < uniqueScores[rank -1]){
      rank++;
    }
    result.push(rank);
  }

  return result;
}

const leaderboard = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];

console.log(denseRangkin(leaderboard, gitsScores).join(""));
