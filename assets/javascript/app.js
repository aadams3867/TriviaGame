$(document).ready(function() {

	//
	// Set up a new game
	//

	function startScreen() {

		// Display start screen
		$('#timerDiv, #questionDiv, #answerDiv').empty();
		$('#buttonDiv').html("<button class='start'>Start</button>");
	}

	startScreen();

	// Capture player's button click to start the trivia game
	$('.start').on('click', function() {
		console.log("Start button clicked!");
		$('#buttonDiv').empty();
		startTimer();
		setTimeout(noAnswerScreen, 15 * 1000);
	});

	//
	// The Game itself
	//

	// Initialize variables
	var questionInterval,
		time=15;

	// Question timer functions
	function startTimer() {
	  questionInterval = setInterval(function() {countdown();}, 1 * 1000);
	}

	function countdown() {
		time--;
		console.log("The time left is " + time);
		$('#timerDiv').html("Seconds remaining: " + time);

		if (time === 0) {
			clearInterval(questionInterval);
		}
	}

	// Question and Answer functions
	function questionScreen() {

		
	}

	function answerScreen() {

	}

	function noAnswerScreen() {
		console.log("Time's up!");
	}



	//
	// Game over + Replay?
	//

	function gameOverScreen() {

		// Display game results


		// Display replay button
		$('#buttonDiv').html("<button class='replay'>Play again?</button>");

	}

/*	gameOverScreen();

	// Capture player's button click to replay the trivia game
	$('.replay').on('click', function() {
		console.log("Replay button clicked!");
	});*/

})