	
	let cuserscore = 0;
	let ccomputerscore = 0;
	let userchoices = userchoice();
	let playericons = playerplay();
	let computerSelection = computerplay();
	let game = playround();


	

		
	function playerplay() {
	let playericon = document.querySelectorAll('.playermove');
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
			
			let computerdraws = ["rock", "paper", "scissors"];
			return computerdraws[Math.floor(Math.random() * computerdraws.length)]
			
			
		
		}
	function userchoice () {
	let playericons = document.querySelectorAll('.playermove');
	playericons.item(0).addEventListener('click', function() {
		return playround("rock");
	})
	playericons.item(1).addEventListener('click', function() {
		return playround("paper");
	})
	playericons.item(2).addEventListener('click', function() {
		return playround("scissors");
	})
	}
	function win(userchoice,computerchoices){
		let z = computerchoices
		let userscore = document.getElementById('playerscore')
		userscore.textContent = ++cuserscore
		let announcer = document.getElementById('scorekeeper')
		announcer.textContent = "you win this round playerpick:" + userchoice + " computer pick: " + z;
		gameconclusion();
	}
	function lose(userchoice,computerchoices) {
		let z = computerchoices
		let computerscore = document.getElementById('computerscore')
		computerscore.textContent = ++ccomputerscore
		let announcer = document.getElementById('scorekeeper')
		announcer.textContent = "you lose round playerpick:" + userchoice + " computer pick: " + z;
		gameconclusion();
	}
	function tie() {
		let announcer = document.getElementById('scorekeeper')
		announcer.textContent = "tie"
		gameconclusion();
	} 
	function playround(userchoice) {
		const computerchoices = computerplay();
		
		switch(userchoice + computerchoices) {
			case "rockscissors":
			case "scissorspaper":
			case "paperrock":
				win(userchoice,computerchoices);
			break;
			case "rockrock":
			case "paperpaper":
			case "sscissorsscissors":
				tie(userchoice,computerchoices);

			break;
			case "rockpaper":
			case "paperscissors":
			case "scissorsrock":
				lose(userchoice,computerchoices);	
			}
	
	}

		function roundannouncer () {
			announcer = document.getElementById('scorekeeper');
		}
		function gameconclusion () {
			announcer = document.getElementById('scorekeeper')
			if (cuserscore >= 5) {
				announcer.textContent = "you win!" 
				resetpage()
			} else if (ccomputerscore >= 5) {
				announcer.textContent = "you lose!"
				resetpage()
			} 
			
		}

		function resetpage() {
			
			setTimeout(() => {
				window.location.reload(true) 
			}, 1000);
		}
	
		
		