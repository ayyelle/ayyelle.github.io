function showMoreInfo() {
  var x = document.getElementById("long_intro");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  var a = document.getElementById("technical_skills");
  a.style.display = "none"
  var y = document.getElementById("other_experiences");
  y.style.display = "none"
  var z = document.getElementById("short_intro");
  z.style.display = "none"
}

function showTechnicalSkills() {
  var x = document.getElementById("technical_skills");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  var y = document.getElementById("long_intro");
  y.style.display = "none"
  var z = document.getElementById("short_intro");
  z.style.display = "none"
  var a = document.getElementById("other_experiences");
  a.style.display = "none"
}


function showOtherExperiences() {
  var x = document.getElementById("other_experiences");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 

  var a = document.getElementById("technical_skills");
  a.style.display = "none"
  var y = document.getElementById("long_intro");
  y.style.display = "none"
  var z = document.getElementById("short_intro");
  z.style.display = "none"
}


function showSummary() {
  var x = document.getElementById("short_intro");
  if (x.style.display === "none") {
    x.style.display = "block";
}
  var a = document.getElementById("technical_skills");
  a.style.display = "none"
  var y = document.getElementById("long_intro");
  y.style.display = "none"
  var z = document.getElementById("other_experiences");
  z.style.display = "none"

}
