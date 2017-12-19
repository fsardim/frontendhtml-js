var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    var filtro = this.value;

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(filtro, "i");  //Expressão regular não case sensitive

        if(expressao.test(nome))
        	paciente.classList.remove("invisivel");
        else
        	paciente.classList.add("invisivel");
    }
});

//Outra possibilidade de comparação
/*
	if(nome.substr(0, filtro.length) == filtro || filtro.length == 0)
	comparar apenas com letras minusculas: this.value.toLowerCase() e nome.substr().toLowerCase()

*/