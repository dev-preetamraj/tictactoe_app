$(document).ready(function(){

	var clearBoard = $(".btn");
	var tdSelector = $("td");
	var music = new Audio();
	music.src = 'media/chalu.mp3';
	clearBoard.on("click", function(){
		for (var i = 0 ; i <=tdSelector.length-1 ; i++) {
			tdSelector[i].textContent = '';
		}
	})
	function addText(){
		if(this.textContent===''){
			this.textContent = 'X';
			this.style.color = '#007bff';
			music.play();
		}else if(this.textContent==='X'){
			this.textContent = 'O';
			this.style.color = '#5eeb98'
			music.play();
		}else{
			this.textContent = '';
		}
	}
	for (var i = 0; i < tdSelector.length; i++) {
		tdSelector[i].addEventListener('click', addText)
	}
	


	

});