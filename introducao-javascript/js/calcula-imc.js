var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var alturaInvalida = altura <= 0 || altura > 2.50;
	var pesoInvalido = peso <= 0 || peso > 200;

	if (alturaInvalida && pesoInvalido){
		imc = "Ambos os valores estão errados";
		paciente.querySelector(".info-imc").textContent = imc;
		paciente.classList.add("paciente-invalido");
	}
	else if (pesoInvalido) {
		imc = "Peso inválido";
		paciente.querySelector(".info-imc").textContent = imc;
		paciente.classList.add("paciente-invalido");
	}
	else if (alturaInvalida){
		imc = "Altura inválida";
		paciente.querySelector(".info-imc").textContent = imc;
		paciente.classList.add("paciente-invalido");
	}
	else{
		var imc = calculaImc(peso, altura)
		paciente.querySelector(".info-imc").textContent = imc;
	}		
}

function calculaImc(peso, altura) {
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}