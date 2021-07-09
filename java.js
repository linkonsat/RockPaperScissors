
	
	
	
	 let playerSelection = iconchange();
	let computerSelection = computerplay();
	let roundresult = playRound(playerSelection, computerSelection);


	function iconchange() {	

		let playericon = document.querySelectorAll('.playermove');
		
		let playericons = document.querySelectorAll('.playermove')
			let first = playericons.item(0)
			first.addEventListener('click', () => {
			 let playerrock = 0;
			 return playerrock;
			})
		
			let second = playericons.item(1);
			second.addEventListener ('click', () => {
				let playerpaper = 1;
				return playerpaper;
			})
			let third = playericons.item(2);
			third.addEventListener ('click', () => {
				let playerscissors = 2;
				return console.log(playerscissors);
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
		
		
		
		
	function computerplay() {
		let playericonss = document.querySelectorAll("playermove");
		playericonss.forEach( playericonss => (playericonss.addEventListener('click', () => {
		let computerdraws = ["rock", "paper", "scissors"];
		return console.log(computerdraws[Math.floor(Math.random() * computerdraws.length)])
		
		})
		))}

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

	const playerscoreview = document.getElementById('playerscore');

	const computerscoreview = document.getElementById('computerscore') 
	
	let playerscore = (function() {
		let playerscore = -1;
		return function() {
			++playerscore;
			return playerscore;
		}
	})();

	let computerscore = (function() {
		let computerscore = -1;
		return function() {
			++computerscore;
			return computerscore;
		}
	})();
	playerscoreview.textContent = playerscore();
	computerscoreview.textContent = computerscore();
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



