let miejsca = document.querySelectorAll("td");
var kliniete;
window.onload = function(){
    miejsca.forEach(function(pole){
        pole.addEventListener("click", function(){
            wstaw(pole);
            klikniete = true;
            if(klikniete == true){
                pole.style.backgroundColor="yellow";
                klikniete = false;
            }           
            else if(klikniete == false){
                pole.style.backgroundColor="white";
            } 
        })
    })
}
function wstaw(pole){
    let nowa = prompt("Podaj nową wartość");
    pole.innerHTML = nowa;
}