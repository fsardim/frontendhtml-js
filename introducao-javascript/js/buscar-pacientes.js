var botaoAdicionar = document.querySelector("#buscar-pacientes");
var primeiraExecucao = true;

botaoAdicionar.addEventListener("click", () => {
	if(primeiraExecucao){
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	    xhr.addEventListener("load", () => {

	    	if(xhr.status == 200){
	    		document.querySelector("#erro-ajax").classList.add("invisivel");
		        var resposta = xhr.responseText;
		        var pacientes = JSON.parse(resposta);

		        for (var i = 0;i < pacientes.length; i++) {
		        	montaPacienteHTML(pacientes[i]);
		        }


		    } else {
		    	console.log(xhr.status);
		    	console.log(xhr.responseText);
		    	document.querySelector("#erro-ajax").classList.remove("invisivel");
		    }
	    });

	    xhr.send();
	    primeiraExecucao = false;
	}
});