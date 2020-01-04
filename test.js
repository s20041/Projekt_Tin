var sliderWaga = document.getElementById("wagaSlider");
var outputWaga = document.getElementById("waga");
outputWaga.innerHTML = sliderWaga.value; // Display the default slider value

var sliderWzrost = document.getElementById("wzrostSlider");
var outputWzrost = document.getElementById("wzrost");
outputWzrost.innerHTML = sliderWzrost.value; // Display the default slider value

var sliderWiek = document.getElementById("wiekSlider");
var outputWiek = document.getElementById("wiek");
outputWiek.innerHTML = sliderWiek.value; // Display the default slider value

sliderWaga.oninput = function() {
  outputWaga.innerHTML = this.value;
} 

sliderWzrost.oninput = function() {
  outputWzrost.innerHTML = this.value;
} 

sliderWiek.oninput = function() {
  outputWiek.innerHTML = this.value;
} 


function obliczWszystko(){
	//wzor 9.99*masa + 6,25 * wzrost +4,92*wiek + (105 mezczyzna lub + 161 kobieta) * aktywnosc(1.2 , 1.4 , 1.6 , 1.8 , 2.0) +- cel(200-300) "
	var waga = sliderWaga.value;
	var wzrost = sliderWzrost.value;
	var wiek = sliderWiek.value;
	var plec = document.getElementById("female").checked == true ? 251:105;
	
	var cel = document.getElementById("cel").value;
	var activity = document.getElementById("aktywnosc").value;
	
	var wynik = parseInt(9.99*waga + 6.25*wzrost + 4.92*wiek +plec + parseFloat(cel) * activity);
	
	if(isNaN(wynik)==true){
		document.getElementById("tableWynik").style.display="none";
		document.getElementById("tableZlyWynik").style.display="table";
		document.getElementById("wynikZly").innerHTML = "<a>Zle Dane</a>";
	}
	else{
		document.getElementById("tableWynik").style.display="table";
		document.getElementById("tableZlyWynik").style.display="none";
		
		document.getElementById("wynik").innerHTML ="<a>Zapotrzebowanie kaloryczne</a>";
		document.getElementById("wynikValue").innerHTML ="<a>"+ wynik + " kcal</a>";
		
		document.getElementById("bialko").innerHTML = "<a>Białko</a>";
		document.getElementById("bialkoValue").innerHTML = "<a>"+parseInt(wynik*0.25) + " kcal  ("+ parseInt((wynik*0.25)/4) + " g)</a>" ;
		
		document.getElementById("tluszcz").innerHTML = "<a>Tłuszcze</a>";
		document.getElementById("tluszczValue").innerHTML = "<a>"+parseInt(wynik*0.2) + " kcal  (" + parseInt((wynik*0.25)/9) + " g)</a>";
		
		document.getElementById("weglowodany").innerHTML ="<a>Węglowodany</a>";
		document.getElementById("weglowodanyValue").innerHTML = "<a>"+parseInt(wynik*0.55) + " kcal  (" + parseInt((wynik*0.5)/4) + " g)</a>";
		
	}
	
	//bialko 25 tluszcze 20 wegle 55
	
}

