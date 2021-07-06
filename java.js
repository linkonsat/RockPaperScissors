
	
	
	
let playerSelection = playermove();
	let computerSelection = computerplay();
	let roundresult = playRound(playerSelection, computerSelection);


	function computerplay() {
		let computerdraws = ["rock", "paper", "scissors"];
		return computerdraws[Math.floor(Math.random() * computerdraws.length)];
		}
	function playermove() {
		
			 
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


	function game(roundresult){
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
	
const playericon = document.querySelectorAll('.playermove')
playericon.forEach( playericon => {
	playericon.addEventListener('click', () =>  {
		playericon.classList.add('move')

		
	})

})
const playericons = document.querySelectorAll('.playermove')

function removeborder(playericon) {
	console.log(playericon)
}

playericons.forEach(playericon => playericon.addEventListener('transitionend', removeborder))
const computericon = document.querySelectorAll(`.computermove`)