var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

	event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var formOK = consisteFormulario(form);

    if(formOK){
    	montaPacienteHTML(paciente);
	    limpaFormulario(form);
    }
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function consisteFormulario(form){
    var boolNome = form.nome.value != "";
    var boolPeso = form.peso.value != "" && form.peso.value > 0 && form.peso.value <= 200;
    var boolAltura = form.altura.value != "" && form.altura.value > 0 && form.altura.value < 2.5;
    var boolGordura = form.gordura.value != "" && form.gordura.value > 0;

    //var mensagemErro = document.querySelector("#mensagem-erro");
    var erros = [];

    if(!boolNome)
    	erros.push("Erro: Nome em branco");
    if(!boolPeso)
    	erros.push("Erro: Peso não preenchido ou inválido");
    if(!boolAltura)
    	erros.push("Erro: Altura não preenchida ou inválida");
    if(!boolGordura)
    	erros.push("Erro: Percentual de gordura não preenchido ou inválido");
    exibeMensagensErro(erros);

    return (boolNome && boolPeso && boolAltura && boolGordura);
}

function limpaFormulario(form) {
	form.reset();
}

function montaPacienteHTML(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(pacienteTr);
}

function montaTd(conteudo, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = conteudo;
	return td;
}

function exibeMensagensErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML="";
	for (var i = 0; i < erros.length; i++) {
		var li = document.createElement("li");
		li.textContent = erros[i];
		ul.appendChild(li);
	}

	console.log(ul.innerHTML);
}