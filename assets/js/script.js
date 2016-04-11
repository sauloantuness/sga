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
var els = document.getElementsByClassName("aula");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dragstart', dragstart, false);
}

// var els = document.getElementsByClassName("aula");
var els = document.getElementsByTagName("td");
for(var i = 0; i < els.length; i++){
	els[i].addEventListener('dragenter', dropEnter, false);
	els[i].addEventListener('dragleave', dropLeave, false);
	els[i].addEventListener('dragover', allowDrop, false);
	els[i].addEventListener('drop', drop, false);
}
