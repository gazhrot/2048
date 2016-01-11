document.onkeydown = function(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      console.log("fleche du haut");
    } else if (e.keyCode == "40") {
      console.log("fleche du bas");
    } else if (e.keyCode == "37") {
      console.log("fleche de gauche");
    } else if (e.keyCode == "39") {
      console.log("fleche de droite");
    }
}