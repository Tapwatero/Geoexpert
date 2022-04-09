function updateScore(s, maxScore) {
  if (localStorage.getItem(s)) {
    localStorage.setItem(s, (parseInt(localStorage.getItem(s))+1));
    if (localStorage.getItem(s) == maxScore) {
      start();
      document.getElementById("query").disabled = true;
    }
  } else {
    localStorage.setItem(s, 1);
  }
  setScore(localStorage.getItem(s), maxScore);
}


 function setScore(s, maxScore)
 {
  if (s)
  {
     document.getElementById("score").textContent = s + "/" + maxScore;
  }
 }