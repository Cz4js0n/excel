var suma = 0;
var ilosc = 0;
var miejsca = document.querySelectorAll('td');
miejsca.forEach(miejsce => {
    miejsce.addEventListener('click', function() {
        zmiana(miejsce);
    });
});
function zmiana(komorka) {
	if (komorka.style.backgroundColor === "lightyellow") 
    {
		suma -= parseInt(komorka.innerText);
        ilosc -= 1;
		komorka.innerText = "";
		komorka.style.backgroundColor = "#FFBFA9";
	} 
    else 
    {
        var nowa = prompt("Podaj wartość");
        komorka.innerText = nowa;
		suma += parseInt(komorka.innerText);
        ilosc += 1;
		komorka.style.backgroundColor = "lightyellow";
	}
}
function sumowanie() {
	alert("Suma klikniętych komórek wynosi: " + suma);
}
function sredniaa() {
    var srednia = suma/ilosc;
    alert("Średnia klikniętych komórek wynosi: " + srednia);
}
