
class Votos{
	constructor(numero,voto)
	{
		this.Id = numero;
		this.votos = voto;
	}
}




class Banco{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem("votos")) || []
	}
	inserir(obj){
		this.dados.push(obj);
		localStorage.setItem("votos", JSON.stringify(this.dados));
	}
	listar()
	{
		this.dados = JSON.parse(localStorage.getItem("votos"));
		return this.dados;
	}
}

function inicializar() {
	var inicial = JSON.parse(localStorage.getItem("votos"))
	if (inicial) {
		
	}else{
		for (var i = 0; i < 30; i++) {
			var votos = new Votos((i+1), 0);
			var bd = new Banco();
			bd.inserir(votos);
		}
	}
}

function mostrar() {
	var bd = new Banco();
	var vetor = bd.listar();
	var texto;
    var nome ;
	for (var i = 0; i < vetor.length; i++){ 
		nome = 'voto' 
		nome +=(i+1); 
        texto = document.getElementById(nome);
        texto.innerHTML =" ";
        texto.innerHTML += "<td>" + vetor[i].votos + "</td>";
    }
}    

function votar(numero){
	var bd = new Banco();
	var vetor = bd.listar();
	for (var i = 0; i < vetor.length; i++) {
		if (vetor[i].Id == numero) {
			vetor[i].votos ++
			localStorage.setItem("ultimo", vetor[i].Id)
		}
	}
	localStorage.setItem("votos", JSON.stringify(vetor))
	mostrar();
}

function desfazer() {
	var bd = new Banco();
	var vetor = bd.listar();
	var excluir = localStorage.getItem("ultimo");
	for (var i = 0; i < vetor.length; i++) {
		if (vetor[i].Id == excluir) {
			if (vetor[i].votos != 0) {
				vetor[i].votos --
		}
	}
	}
	localStorage.setItem("ultimo", " ")
	localStorage.setItem("votos", JSON.stringify(vetor))
	mostrar();
}

function limpar_votos() {
	var vetor = [];
	for (var i = 0; i < 30; i++) {
		var obj = new Votos((i+1), 0);
		vetor.push(obj);
	}
	localStorage.setItem("votos", JSON.stringify(vetor))
	mostrar();
}



function onLoad() {
    var pessoas = JSON.parse(localStorage.getItem("votos"));

  imprimirArray('spanOriginal', pessoas);
  
  pessoas.sort(ordenarPorIdade);
  
  imprimirArray('spanOrdenadaPorIdade', pessoas);
}

function ordenarPorIdade(a, b){
return a.votos - b.votos;
}

function imprimirArray(id, array) {
	var span;
	var span2;
	var id;
	var votos;
	var vetor = array.reverse();
  for (var i = 0; i < vetor.length; i++) {
	votos = 'voto';
	votos +=(i+1);
	span = document.getElementById(votos);
	id = 'Id';
	id +=(i+1);
	span2 = document.getElementById(id);
	span.innerHTML = ' ';
	span2.innerHTML = ' ';
	span2.innerHTML = "<td>" + vetor[i].Id + "<td>";
	span.innerHTML = "<td>" + vetor[i].votos + "<td>";
  }
	var texto;
    var nome ;
	for (var i = 0; i < vetor.length; i++){ 
		nome = 'voto' 
		nome +=(i+1); 
        texto = document.getElementById(nome);
        texto.innerHTML =" ";
        texto.innerHTML += "<td>" + vetor[i].votos + "</td>";
    }
}

function resultado_final(){
	window.location.assign("final-votacao.html");
}


function voltar(){
	window.location.assign("index.html");
}
