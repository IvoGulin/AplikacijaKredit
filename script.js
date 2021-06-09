function fun()
{
	var glavnica = document.getElementById("unos1").value;
	var postotak = document.getElementById("unos2").value;
	var brojrata = document.getElementById("unos3").value;
	var placa = document.getElementById("unos4").value;
	
	var uglavnica = parseFloat(glavnica) + parseFloat(glavnica * postotak/100);
	//alert (uglavnica);
	var rata = parseFloat(uglavnica/brojrata);
	var uplaca = placa - rata;
	
	document.getElementById("rez1").innerHTML = rata;
	document.getElementById("rez2").innerHTML = uplaca;
}