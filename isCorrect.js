window.onload = function WindowLoad(event) {
  localStorage.clear();
}

function reload(reloadPointer) {
  switch (reloadPointer)
  {
    case "world":
      simplemaps_worldmap.refresh();
      break
    case "europe":
      simplemaps_europemap.refresh();
      break
    case "america":
      simplemaps_usmap.refresh();
      break
    case "caribbean":
      simplemaps_caribbeanmap.refresh();  
      break
  }
}

function isCorrect(q, correct_countries, map, reloadPointer, labels, s, maxScore) {
  const states = new Map();

  document.getElementById("query").value = "";
  for (let i = 0; i < correct_countries.length; i++) {
    states.set(map['state_specific'][correct_countries[i]]['name'].toLowerCase(), correct_countries[i]);
  }
  if (states.has(q.toLowerCase()) && map['state_specific'][states.get(q.toLowerCase())]['color'] != "#097696")
  {
    map['state_specific'][states.get(q.toLowerCase())]['color'] = "#097696";
    if (labels)
    {
      map['labels'][states.get(q.toLowerCase())]['display'] = "all";
      if (map['labels'][states.get(q.toLowerCase())]['pill'] == "no") 
      {
        map['labels'][states.get(q.toLowerCase())]['pill'] = "yes";
      }
    }
    updateScore(s, maxScore);
    reload(reloadPointer);
  }
}