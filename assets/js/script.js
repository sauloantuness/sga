// DRAG AND DROP

function dragstart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropEnter(ev){
	this.classList.add('hover');
}

function dropLeave(ev){
	this.classList.remove('hover');
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    var id = ev.dataTransfer.getData("text");
	var target = ev.target;

	while(target.tagName != 'TD')
		target = target.parentNode;
	
  	target.appendChild(document.getElementById(id));
    this.classList.remove('hover');
}

// EVENT LISTENER'S

//var els = document.getElementsByClassName("aula");
//for(var i = 0; i < els.length; i++){
//	els[i].addEventListener('dragstart', dragstart, false);
//}

var els = document.getElementsByTagName("td");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dragenter', dropEnter, false);
	els[i].addEventListener('dragleave', dropLeave, false);
	els[i].addEventListener('dragover', allowDrop, false);
	els[i].addEventListener('drop', drop, false);
}


// UTILS

function criaAula(aula){
	var div = document.createElement("div");
	div.setAttribute('id', aula.id);
	div.setAttribute('draggable', true);

	div.classList.add('aula');
	if(aula.departamento)
		div.classList.add(aula.departamento);

	var h4 = document.createElement("h4");
	h4.innerHTML = aula.disciplina;
	div.appendChild(h4);
	
	var h5 = document.createElement("h5");
	h5.innerHTML = aula.professor;
	div.appendChild(h5);
	
	var h6 = document.createElement("h6");
	h6.innerHTML = aula.sala;
	div.appendChild(h6);

	div.addEventListener('dragstart', dragstart, false);
	
	return div;
}

function insereAula(aula){
	var dia = 'dia-' + aula.dia;
	var horario = 'horario-' + aula.horario;

	var tr = document.getElementsByName(horario)[0];
	var td = tr.getElementsByTagName('td')[aula.dia];

	td.appendChild(criaAula(aula));
}

// START

function init(){
	for (var i = aulas.length - 1; i >= 0; i--)
		insereAula(aulas[i]);
}


var aulas = [
	{
		'id' : 1,
		'disciplina' : 'Cálculo II',
		'professor' : 'André Ferreira',
		'sala' : '215',
		'departamento' : 'dfm',
		'dia' : 0,
		'horario' : 3
	},
	{
		'id' : 2,
		'disciplina' : 'Física I',
		'professor' : 'Luís Poveda',
		'sala' : '215',
		'departamento' : 'dfm',
		'dia' : 0,
		'horario' : 4
	},
	{
		'id' : 3,
		'disciplina' : 'Sistemas Digitais',
		'professor' : 'Anísio Mendes',
		'sala' : '114',
		'departamento' : 'decom',
		'dia' : 0,
		'horario' : 5
	},
	{
		'id' : 4,
		'disciplina' : 'Química OPT',
		'professor' : 'João Bosco',
		'sala' : 'LT 02',
		'departamento' : 'dequi',
		'dia' : 1,
		'horario' : 2
	},
	{
		'id' : 5,
		'disciplina' : 'Programação de Computadores II',
		'professor' : 'Bruno André',
		'sala' : '215',
		'departamento' : 'decom',
		'dia' : 1,
		'horario' : 3
	},
	{
		'id' : 6,
		'disciplina' : 'Filosofia da Tecnologia',
		'professor' : 'Roni',
		'sala' : '215',
		'departamento' : 'dcsf',
		'dia' : 1,
		'horario' : 4
	},
	{
		'id' : 7,
		'disciplina' : 'Computação Gráfica',
		'professor' : 'Flávio Coutinho',
		'sala' : 'LAB 221',
		'departamento' : 'decom',
		'dia' : 1,
		'horario' : 5
	},
	{
		'id' : 8,
		'disciplina' : 'LAB. Química OPT L1',
		'professor' : 'Priscila',
		'sala' : '225',
		'departamento' : 'dequi',
		'dia' : 2,
		'horario' : 1
	},
	{
		'id' : 9,
		'disciplina' : 'LAB. Química OPT L2',
		'professor' : 'Priscila',
		'sala' : '225',
		'departamento' : 'dequi',
		'dia' : 2,
		'horario' : 2
	},
	{
		'id' : 10,
		'disciplina' : 'Cálculo II',
		'professor' : 'André Ferreira',
		'sala' : '215',
		'departamento' : 'dfm',
		'dia' : 2,
		'horario' : 3
	},
	{
		'id' : 11,
		'disciplina' : 'Física I',
		'professor' : 'Luís Poveda',
		'sala' : '215',
		'departamento' : 'dfm',
		'dia' : 2,
		'horario' : 4
	},
	{
		'id' : 12,
		'disciplina' : 'Química OPT',
		'professor' : 'João Bosco',
		'sala' : 'LT 02',
		'departamento' : 'dequi',
		'dia' : 3,
		'horario' : 2
	},
	{
		'id' : 13,
		'disciplina' : 'Lab Programação de Computadores II - L1',
		'professor' : '',
		'sala' : 'LAB 11 - PR 12',
		'departamento' : 'decom',
		'dia' : 3,
		'horario' : 3
	},
	{
		'id' : 14,
		'disciplina' : 'Lab Sistemas Digitais - L1',
		'professor' : '',
		'sala' : 'LAB 8 - PR 12',
		'departamento' : 'decom',
		'dia' : 3,
		'horario' : 3
	},
	{
		'id' : 15,
		'disciplina' : 'Lab Programação de Computadores II - L1',
		'professor' : '',
		'sala' : 'LAB 11 - PR 12',
		'departamento' : 'decom',
		'dia' : 3,
		'horario' : 4
	},
	{
		'id' : 16,
		'disciplina' : 'Lab Sistemas Digitais - L1',
		'professor' : '',
		'sala' : 'LAB 8 - PR 12',
		'departamento' : 'decom',
		'dia' : 3,
		'horario' : 4
	},
	{
		'id' : 17,
		'disciplina' : 'Computação Gráfica',
		'professor' : 'Flávio Coutinho',
		'sala' : 'LAB 221',
		'departamento' : 'decom',
		'dia' : 3,
		'horario' : 5
	},
	{
		'id' : 18,
		'disciplina' : 'Cálculo II',
		'professor' : 'André Ferreira',
		'sala' : '215',
		'departamento' : 'dfm',
		'dia' : 4,
		'horario' : 3
	},
	{
		'id' : 19,
		'disciplina' : 'Inglês Instrumental T1',
		'professor' : 'André',
		'sala' : '215',
		'departamento' : 'deltec',
		'dia' : 4,
		'horario' : 4
	},
	{
		'id' : 20,
		'disciplina' : 'Inglês Instrumental T2',
		'professor' : 'André',
		'sala' : '215',
		'departamento' : 'deltec',
		'dia' : 4,
		'horario' : 5
	},
];

window.onload = init;