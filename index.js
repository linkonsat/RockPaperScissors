<script>
	
	
	
	
	
function computerPlay() {
		let computerdraws = ["rock", "paper", "Scissors"];
		let computerdrawrandom = computerdraws[Math.floor(Math.random() * computerdraws.length)];

		console.log(computerdrawsrandom * 5);
		}
	
	function playRound(playerSelection, computerSelection){	
	const playerSelection = prompt("Please enter your hand for this round");
	let i = 0
	


	
	if (computerdrawrandom == "rock" && playerSelection =="rock") {
		alert("its a tie")
	} else if ( computerdrawrandom == "rock" &&  playerSelection == "paper") {
		alert("its a tie")
		i+= 1

	}   else if (computerdrawrandom == "rock" &&  playerSelection == "scissors") {
	alert("you lose")
	} else if (computerdrawrandom == "paper" && playerSelection == "scissors") {
		alert("you win")
		i += 1
	}	else if (computerdrawrandom == "paper" && playerSelection == "rock"){
	alert("you lose")
	} else if (computerdrawrandom ==  "paper" && playerSelection == "paper")
	alert("this is a tie")
	 else if (computerdrawrandom == "scissors" && playerSelection == "scissors") {
		alert ("this is a tie")
	} else if  (computerdrawrandom == "scissors" && playerSelection == "rock") {
		alert(" this is a win. rock beats scissors")
		i += 1
	} else if (computerdrawrandom == "scissors" || playerSelection == "paper") {
		alert("This is a loss scissors beats paper")
	}

		
	

	
	

	
		
	

</script>