var span = document.getElementsByClassName("close-popup")[0];
// When the user clicks the button, open the modal 
function affiche(name) {
  modal = document.getElementById(name);
  modal.style.display = "block";
}

function cache(){
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function onClick(lien) {
  document.getElementById("img01").src = lien;
  document.getElementById("modal01").style.display = "block";
}