$(document).ready(function(){

	window.chance = 1;
	
	var clearBoard = $(".btn");
	var tdSelector = $("td");
	var music = new Audio();
	music.src = 'media/chalu.mp3';
	function clearBord(){
		for (var i = 0 ; i <=tdSelector.length-1 ; i++) {
			tdSelector[i].textContent = '';
		}
		window.chance = 1;
		result.innerHTML = '';
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
				setTimeout(clearBord,500);
				result.innerHTML=tdSelector[array[i][0]].textContent+" WON The Last Match!";
				
			}	
		}
		
	}
	function addText(){
		if(this.textContent===''){
			if(window.chance == 1){
				this.textContent = 'X';
				this.value = 1;
				this.style.color = '#007bff';
				window.chance = 0;
			} else{
				this.textContent = 'O';
				this.value = 0;
				this.style.color = '#94ffaa';
				window.chance = 1;
			}
		}
		music.play();
		checker();
	}
	for (var i = 0; i < tdSelector.length; i++) {
		tdSelector[i].addEventListener('click', addText)
	}
	


	

});