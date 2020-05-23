$(document).ready(function(){

	var clearBoard = $(".btn");
	var tdSelector = $("td");
	var music = new Audio();
	music.src = 'media/chalu.mp3';
	function clearBord(){
		for (var i = 0 ; i <=tdSelector.length-1 ; i++) {
			tdSelector[i].textContent = '';
			result.innerHTML = '';
		}
	};
	clearBoard.on("click", clearBord)
	const array=["012","345","678","036","147","258","048","246"];
	function checker(){
		for(var i=0;i<array.length;i++){
			
			if ((tdSelector[array[i][0]].textContent!=='' 
				&& tdSelector[array[i][1]].textContent!=='' 
				&& tdSelector[array[i][2]].textContent!=='') 
				&& (tdSelector[array[i][0]].textContent===tdSelector[array[i][1]].textContent) 
				&& (tdSelector[array[i][1]].textContent===tdSelector[array[i][2]].textContent) 
				)
			{
				
				result.innerHTML=tdSelector[array[i][0]].textContent+" WINS";
			}	
		}
		
	}
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
		checker();
	}
	for (var i = 0; i < tdSelector.length; i++) {
		tdSelector[i].addEventListener('click', addText)
	}
	


	

});