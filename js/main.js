
class Votos{
	constructor(numero,voto, nome)
	{
		this.Id = numero;
		this.votos = voto;
		this.nome = nome;
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
			if (i==0) {
				var votos = new Votos((i+1), 0, "Saraiva");
			}else
			if (i==1) {
				var votos = new Votos((i+1), 0, "Crismen")
			}else
			if (i==2) {
				var votos = new Votos((i+1), 0, "Eliszangela Gomes")
			}else
			if (i==3) {
				var votos = new Votos((i+1), 0, "Tiago Aquino")
			}else
			if (i==4) {
				var votos = new Votos((i+1), 0, "Janine Matos")
			}else
			if (i==5) {
				var votos = new Votos((i+1), 0, "Professora Viviane")
			}else
			if (i==6) {
				var votos = new Votos((i+1), 0, "Benoni Teixeira")
			}else
			if (i==7) {
				var votos = new Votos((i+1), 0, "Waldeir Berlamine(KARATÊ)")
			}else
			if (i==8) {
				var votos = new Votos((i+1), 0, "Dani Barros")
			}else
			if (i==9) {
				var votos = new Votos((i+1), 0, "Eliane Da Silva")
			}else
			if (i==10) {
				var votos = new Votos((i+1), 0, "Dani Viebrantz")
			}else
			if (i==11) {
				var votos = new Votos((i+1), 0, "Wanderlucy")
			}else
			if (i==12) {
				var votos = new Votos((i+1), 0, "Elaine Da Silva")
			}else
			if (i==13) {
				var votos = new Votos((i+1), 0, "Mariuza Brum")
			}else
			if (i==14) {
				var votos = new Votos((i+1), 0, "Edison Moreira Palhano")
			}else
			if (i==15) {
				var votos = new Votos((i+1), 0, "Alice Rocha")
			}else
			if (i==16) {
				var votos = new Votos((i+1), 0, "Cristiany Semzack")
			}else
			if (i==17) {
				var votos = new Votos((i+1), 0, "Lurdinha")
			}else
			if (i==18) {
				var votos = new Votos((i+1), 0, "Fatima Medeiros")
			}else
			if (i==19) {
				var votos = new Votos((i+1), 0, "Joziane Santos")
			}else
			if (i==20) {
				var votos = new Votos((i+1), 0, "Mayara Amaro")
			}else
			if (i==21) {
				var votos = new Votos((i+1), 0, "Dani Psicologa")
			}else
			if (i==22) {
				var votos = new Votos((i+1), 0, "Claudinei Cardoso")
			}else
			if (i==23) {
				var votos = new Votos((i+1), 0, "Mara")
			}else
			if (i==24) {
				var votos = new Votos((i+1), 0, "Professor Clodoaldo")
			}else
			if (i==25) {
				var votos = new Votos((i+1), 0, "Vanilza Martinz")
			}else
			if (i==26) {
				var votos = new Votos((i+1), 0, "Vagner Pavão")
			}else
			if (i==27) {
				var votos = new Votos((i+1), 0, "Darci Lima")
			}else
			if (i==28) {
				var votos = new Votos((i+1), 0, "Naldo Moreno")
			}else
			if (i==29) {
				var votos = new Votos((i+1), 0, "Naza Almeida")
			}
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
	span2.innerHTML = "<td>" + vetor[i].Id + "-" + vetor[i].nome + "<td>";
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
