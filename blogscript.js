const expandButton= document.querySelector(".btn"); //DataButton
const operatorSymbol= document.querySelector(".header1 p");

var boolean;

function clickedIt(boolean) {
   boolean = expandButton.classList.contains("collapsed"); //vanilla javascript of hasclass in jquery. Most effective way to check class names. Returns either T/F.
   return boolean;
}

function expand() {
let button;

var buttonClicked= clickedIt(button);

if(buttonClicked == true)
{
  operatorSymbol.innerHTML = "-";
}
else{ operatorSymbol.innerHTML= "+"}
}

expandButton.addEventListener("click",expand,false); //actionlistener for button. Runs function expand whenever button is clicked.
