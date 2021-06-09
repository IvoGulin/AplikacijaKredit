function fun()
{
	var glavnica = document.getElementById("unos1").value;
	var postotak = document.getElementById("unos2").value;
	var brojrata = document.getElementById("unos3").value;
	
	var uglavnica = parseFloat(glavnica) + parseFloat(glavnica * postotak/100);
	//alert(uglavnica);
	
	var rata = parseFloat(uglavnica/brojrata);
	//alert(rata);
	document.getElementById("rez").innerHTML = rata;
}