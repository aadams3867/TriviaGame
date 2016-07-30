$(document).ready(function() {

	//
	// Set up a new game
	//

	// Initialize variables
	var questionInterval, questionTimeout,
		time=15;			// Player has 15 sec to answer a question

	function startScreen() {

		// Display start screen
		$('#timerDiv, #questionDiv, #resultDiv').empty();
		$('#buttonDiv').html("<button class='start'><h2>Start</h2></button>");
	}

	startScreen();

	// Capture player's button click to start the trivia game
	$('.start').on('click', function() {
		console.log("Start button clicked!");
		$('#buttonDiv').empty();
		startTimer();
		questionTimeout = setTimeout(noAnswerScreen, 15 * 1000);
		questionScreen();
	});

	//
	// The Game itself
	//

	// Question timer functions
	function startTimer() {
	  questionInterval = setInterval(function() {countdown();}, 1 * 1000);
	}

	function countdown() {
		time--;
		console.log("The time left is " + time);
		$('#timerDiv').html("<p>Seconds remaining: " + time + "</p>");

		if (time === 0) {
			clearInterval(questionInterval);
		}
	}

	// Question and Answer functions
	function questionScreen() {
		$('#timerDiv').html("<p>Seconds remaining: " + time + "</p>");
		$('#questionDiv').html("<p>Question</p>");

		$('#choice1').html("<p>Choice 1</p>");
		$('#choice2').html('<p>Choice 2</p>');
		$('#choice3').html('<p>Choice 3</p>');
		$('#choice4').html('<p>Choice 4</p>');
	}

	function correctAnswerScreen() {
		$('#questionDiv').html("<p>Correct!</p>");
		$('#resultDiv').html('<img src="assets/images/full_of_win.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
	}

	function wrongAnswerScreen() {
		$('#questionDiv').html("<p>Wrong!<br>The correct answer was </p>"); // ?? var name ??
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
	}

	function noAnswerScreen() {
		console.log("Time's up!");
		$('#questionDiv').html("<p>Time's up!<br>The correct answer was </p>"); // ?? var name ??
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
	}

	// Capture player's button click to choose an answer
	$('#choice1').on('click', function() {
		console.log("Choice 1 button clicked!");
/*		startTimer();
		setTimeout(noAnswerScreen, 15 * 1000);*/
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		correctAnswerScreen();
	});

	$('#choice2').on('click', function() {
		console.log("Choice 2 button clicked!");
/*		startTimer();
		setTimeout(noAnswerScreen, 15 * 1000);*/
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		correctAnswerScreen();
	});

	$('#choice3').on('click', function() {
		console.log("Choice 3 button clicked!");
/*		startTimer();
		setTimeout(noAnswerScreen, 15 * 1000);*/
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		correctAnswerScreen();
	});

	$('#choice4').on('click', function() {
		console.log("Choice 4 button clicked!");
/*		startTimer();
		setTimeout(noAnswerScreen, 15 * 1000);*/
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		correctAnswerScreen();
	});

	//
	// Game over + Replay?
	//

	function gameOverScreen() {

		// Display game results


		// Display replay button
		$('#buttonDiv').html("<button class='replay'><h2>Play again?</h2></button>");

	}

/*	gameOverScreen();

	// Capture player's button click to replay the trivia game
	$('.replay').on('click', function() {
		console.log("Replay button clicked!");
	});*/

})