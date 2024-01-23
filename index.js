let score1 = 0;
let score2 = 0;

function addScore(team, points) {
    if (team === 1) {
        score1 += points;
        document.getElementById('score1').innerText = score1;
    } else if (team === 2) {
        score2 += points;
        document.getElementById('score2').innerText = score2;
    }
}
    