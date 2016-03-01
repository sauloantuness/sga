function widthHeight(){
	var els = document.getElementsByClassName("day");
	var h = 0;
	var w = 0;
	
	for(var i = 0; i < els.length; i++){
		w = els[i].offsetWidth > w ? els[i].offsetWidth : w;
		h = els[i].offsetHeight > h ? els[i].offsetHeight : h;
	}

	for(var i = 0; i < els.length; i++){
		els[i].style.width = w + 'px';
		els[i].style.height = h + 'px';
	}
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    
    if(ev.target.className == 'day' || ev.target.className == 'day over')
    	ev.target.appendChild(document.getElementById(id));

    if(ev.target.parentNode.className == 'day' || ev.target.parentNode.className == 'day over')
    	ev.target.parentNode.appendChild(document.getElementById(id));

    if(ev.target.parentNode.parentNode.className == 'day' || ev.target.parentNode.parentNode.className == 'day over')
    	ev.target.parentNode.parentNode.appendChild(document.getElementById(id));

    this.classList.remove('over');
}

function dropEnter(ev){
    this.classList.add('over');
}

function dropLeave(ev){
    this.classList.remove('over');
    // widthHeight();
}

function changeDisciplina(ev){
	this.innerHTML = prompt('Disciplina', this.innerHTML);
}

function changeProfessor(ev){
	this.innerHTML = prompt('Professor', this.innerHTML);
}

function changeSala(ev){
	this.innerHTML = prompt('Sala', this.innerHTML);
}


var els = document.getElementsByTagName("h1");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dblclick', changeDisciplina, true);
}

var els = document.getElementsByTagName("h2");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dblclick', changeProfessor, true);
}

var els = document.getElementsByTagName("h3");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dblclick', changeSala, true);
}

var els = document.getElementsByClassName("materia");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dragstart', drag, false);
}

var els = document.getElementsByClassName("day");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dragover', allowDrop, false);
	els[i].addEventListener('drop', drop, false);
	els[i].addEventListener('dragenter', dropEnter, false);
	els[i].addEventListener('dragleave', dropLeave, false);
}

// widthHeight();