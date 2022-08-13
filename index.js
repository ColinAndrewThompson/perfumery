function showNav(){
    var x = document.getElementById("showHAM");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById('btnValue').value= "X";
  } else {
    x.style.display = "none";
    document.getElementById('btnValue').value= "|||";
  }
}