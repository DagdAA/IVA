function Iva(){
	var total = 0;
	var precio = parseFloat(document.getElementById("precio").value);
	var IVA =parseFloat(document.getElementById("IVA").value);
	var resultado = document.getElementById("resultado");
	
	IVA =  (precio * IVA)/100;
	total = parseFloat(precio + IVA).toFixed(2);
	
	resultado.innerHTML =  total;
}