$(document).ready(function(){

	window.chance = 1; // For alternative chances of X and O Here, 1-> X, 0-> O 
	window.totalChancesPlayed = 0; // For removing clearing the board automatically if the moves reach 9

	var clearBoard = $(".btn");
	var tdSelector = $("td");
	var music = new Audio();
	music.src = 'media/chalu.mp3';
	function clearBord(){
		for (var i = 0 ; i <=tdSelector.length-1 ; i++) {
			tdSelector[i].textContent = '';
		}
		window.chance = 1;
		window.totalChancesPlayed = 0;
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
				setTimeout(clearBord,500); // delay in between
				// (I think that a proper way to ask if a new match should be started or not should be asked!)
				result.innerHTML=tdSelector[array[i][0]].textContent+" WON The Last Match!";
				
			} else if(window.totalChancesPlayed == 9){
				
				result.innerHTML="NO One WON The Last Match!";
				setTimeout(clearBord,500);
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
				window.totalChancesPlayed +=1;
				music.play();
			} else{
				this.textContent = 'O';
				this.value = 0;
				this.style.color = '#94ffaa';
				window.chance = 1;
				window.totalChancesPlayed +=1;
				music.play();
			}
		}
		checker();
	}
	for (var i = 0; i < tdSelector.length; i++) {
		tdSelector[i].addEventListener('click', addText)
	}
	


	

});