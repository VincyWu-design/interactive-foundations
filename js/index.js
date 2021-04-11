var textVersion = 1;

setInterval(() => {
  if (document.getElementById('project-02-title1')) {
    if (textVersion === 1) {
      document.getElementById('project-02-title1').style.display = "inline";
      document.getElementById('project-02-title2').style.display = "none";
      document.getElementById('project-02-title3').style.display = "none";
    } else if (textVersion === 2) {
      document.getElementById('project-02-title1').style.display = "none";
      document.getElementById('project-02-title2').style.display = "inline";
      document.getElementById('project-02-title3').style.display = "none";
    } else if (textVersion === 3) {
      document.getElementById('project-02-title1').style.display = "none";
      document.getElementById('project-02-title2').style.display = "none";
      document.getElementById('project-02-title3').style.display = "inline";
    }
    textVersion++;
    if (textVersion === 4) {
      textVersion = 1;
    }
  }
}, 1000);