function calcular() {
	var form = document.calculoIMC;
	var altura = form.altura.value;
	var peso = Number(form.peso.value)

	if(altura.indexOf(',')>-1){
		altura=altura.replace(',','.');
	}

	altura=Number(altura);

	var IMC=peso/Math.pow(altura,2);
	var resultado='O Seu IMC é '+ IMC.toFixed(2);

	if(IMC<18.5){
			resultado +='<br>Você encontra-se abaixo do peso ideal.'
	}

	else if(IMC<25){
			resultado +='<br>Você está no seu peso normal, Parabéns!!'
	}

	else if(IMC<30){
			resultado +='<br>Você está acima do seu peso (sobrepeso)'
	}

	else if(IMC<35){
			resultado +='<br>Obesidade grau I'
	}

	else if(IMC<40){
			resultado +='<br>Obesidade grau II'
	}

	else{
			resultado +='<br>Obesidade grau III'
	}



	document.getElementById('resultado').innerHTML=resultado;
}