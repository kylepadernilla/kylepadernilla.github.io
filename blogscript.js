const expandButton= document.querySelector(".btn"); //DataButton
const operatorSymbol= document.querySelector(".header1 p");

var boolean= false;

function clickedIt(boolean) {
   var canSee = expandButton.classList.contains("collapsed"); //vanilla javascript of hasclass in jquery. Most effective way to check class names.
   boolean = canSee;
   return boolean;
}

function expand() {
var buttonClicked= clickedIt(boolean);

if(buttonClicked == true)
{
  operatorSymbol.innerHTML = "-";
}
else{ operatorSymbol.innerHTML= "+"}
}

expandButton.addEventListener("click",expand,false);
