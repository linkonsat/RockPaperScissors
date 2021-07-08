
	
	
	
	 let playerSelection = iconchange();
	let computerSelection = computerplay();
	let roundresult = playRound(playerSelection, computerSelection);


	function computerplay() {
		let computerdraws = ["rock", "paper", "scissors"];
		return computerdraws[Math.floor(Math.random() * computerdraws.length)];
		}

	function playRound(playerSelection,computerSelection) {
	
	if ( computerSelection == "rock" &&  playerSelection == "paper") {
		return 1;
		
	}   else if (computerSelection == "rock" &&  playerSelection == "scissors") {
		return 2;		
	} else if (computerSelection == "paper" && playerSelection == "scissors") {
		return 1;
	
	}	else if (computerSelection == "paper" && playerSelection == "rock"){
		return 2;
		
	}  else if  (computerSelection == "scissors" && playerSelection == "rock") {
		return 1;
	
	} else if (computerSelection == "scissors" && playerSelection == "paper") {
		return 2;
		
	} 
	

	}

	function announcer(playRound,playerSelection,computerSelection) {
		if (playRound == 1) {
		return "You win. Player choice: " + playerSelection + " vs Computer choice: " + computerSelection;
	} else if (playRound == 2) {
		return "You lose. player choice: " + playerSelection + " vs Computer choice: " + computerSelection;
	} else if (playRound == undefine) {
		return "No win or loss" + playerSelection + computerSelection
	}
	}

	let playerscore = (function() {
		let playerscore = 0;
		return function() {
			++playerscore;
			return playerscore;
		}
	})();

	let computerscore = (function() {
		let computerscore = 0;
		return function() {
			++computerscore;
			return computerscore;
		}
	})();

	function game(roundresult){
		let computerscore = (function() {
			let computerscore = 0;
			return function() {
				++computerscore;
				return computerscore;
			}
		})();

		if (roundresult == 1) {
			playerscore();
			
		} else if (roundresult ==2 ) {
			computerscore ();
			
		}
		
		if (computerscore == 5) {
			return "you lose!";
		} else if (playerscore == 5) {
			return "return you win!"
		}
		
		}

	function iconchange() {	

let playericon = document.querySelectorAll('.playermove');

let playericons = document.querySelectorAll('.playermove')
	let first = playericons.item(0)
	first.addEventListener('click', () => {
	 console.log("hi")
	})

	let second = playericons.item(1);
	second.addEventListener ('click', () => {
		console.log("second")
	})
playericon.forEach( playericon => {
	playericon.addEventListener('click', () =>  {
		playericon.classList.add('move');
		setTimeout( function() { 
			playericon.classList.remove('move')

		}, 1000)
		
		
		
		
	})
	
})

}





const computericon = document.querySelectorAll(`.computermove`);
const playerscoreview = document.getElementById('playerscore');
const computerscoreview = document.getElementById('computerscore') 