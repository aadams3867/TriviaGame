$(document).ready(function() {
	//
	// Trivia questions and answers
	//
	var trivia1 = {
		question: "The 'Picard Maneuver' refers to:",
		answer1: "a battle tactic that Capt Picard used to defeat the Borg",
		answer2: "the method Capt Picard used to avoid former romantic partners",
		answer3: "Patrick Stewart's uniform-straigtening tug",
		answer4: "Capt Picard's unique solution to the Kobayashi Maru",
		correctAnswer: 3
	}

	var trivia2 = {
		question: "The fish in Capt Picard's quarters is named:",
		answer1: "Number Two, second only to Commander Riker",
		answer2: "Horatio, after the literary inspiration for Capt Picard",
		answer3: "Spot, because one of the crew's children named it",
		answer4: "Livingston, after one of the show's producers",
		correctAnswer: 4
	}

	var trivia3 = {
		question: "Lt Worf's prosthetic forehead changed in season 2 because:",
		answer1: "the original was stolen",
		answer2: "Worf got his forehead ridges enhanced to look more menacing",
		answer3: "the show's high ratings brought in money to increase production values",
		answer4: "Michael Dorn demanded an upgrade to a more comfortable prosthetic material",
		correctAnswer: 1
	}

	var trivia4 = {
		question: "The Borg were originally written as:",
		answer1: "space vampires, due to the popularity of Anne Rice's novels",
		answer2: "shapeshifters, but CG technology of that time was too primitive",
		answer3: "insectoids, but were changed to cyborgs due to budget restraints",
		answer4: "robots, but producers decided that was too much like Battlestar Galactica",
		correctAnswer: 3
	}

	var trivia5 = {
		question: "The re-occurring role of Guinan, the mysterious barkeeper, originated when:",
		answer1: "fans of the show complained about the lack of women of color on the show",
		answer2: "Whoopi Goldberg, a Star Trek fan, asked the producers to create a role for her",
		answer3: "network execs decided to bring on a well-known actor to boost ratings",
		answer4: "Whoopi Goldberg lost a bet with the head producer",
		correctAnswer: 2
	}

	var trivia6 = {
		question: "Originally, Data was going to be the Chief Science Officer, but:",
		answer1: "the blue uniform clashed with his android makeup",
		answer2: "the actor they hired to be Chief Operations Officer abruptly quit",
		answer3: "the producers wanted him to be higher in the chain of command",
		answer4: "Brent Spiner successfully argued that a CSO didn't really make logical sense",
		correctAnswer: 1
	}

	var trivia7 = {
		question: "Gene Roddenberry had planned to add gay characters to the show but:",
		answer1: "fan outcry against the idea caused him to scrap those plans",
		answer2: "network execs got cold feet after Roddenberry's death",
		answer3: "writers created a sexually voracious, four-breasted alien, which was deemed ridiculous",
		answer4: "the Executive Producer personally vetoed those plans after Roddenberry's death",
		correctAnswer: 4
	}

	var trivia8 = {
		question: "The number 47 shows up on computer screens, serial numbers, and dates because:",
		answer1: "it is the answer to the ultimate question of life, the universe, and everything",
		answer2: "Gene Roddenberry's wife was born on April 7",
		answer3: "a producer's college math professor proved that all numbers are equal to 47 as a joke",
		answer4: "a fortune teller told Gene Roddenberry that the number '47' would bring him success",
		correctAnswer: 3
	}

	//
	// Set up a new game
	//

	// Initialize variables
	var questionInterval, questionTimeout, resultTimeout,
		time=15,			// Player has 15 sec to answer a question
		count=1,			// Number of questions asked
		numCorrect=0,		// Number of questions correctly answered
		numWrong=0;			// Number of questions incorrectly/not answered

	function startScreen() {

		// Display start screen
		$('#timerDiv, #questionDiv, #resultDiv').empty();
		$('#buttonDiv').html("<button class='start'><h2>Start</h2></button>");
	}

	startScreen();

	// Capture player's button click to start the trivia game
	$('button.start').on('click', function() {
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

		if (count === 9) {
			gameOverScreen();
			return;
		}

		var num = "trivia" + count;

		$('#timerDiv').html("<p>Seconds remaining: " + time + "</p>");
		$('#questionDiv').html("<p>" + trivia1.question + "</p>");
		$('#resultDiv').empty();
		$('#choice1').html("<p>" + trivia1.answer1 + "</p>");
		$('#choice2').html("<p>" + trivia1.answer2 + "</p>");
		$('#choice3').html("<p>" + trivia1.answer3 + "</p>");
		$('#choice4').html("<p>" + trivia1.answer4 + "</p>");
	}

	function correctAnswerScreen() {
		$('#questionDiv').html("<p>Correct!</p>");
		$('#resultDiv').html('<img src="assets/images/full_of_win.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numCorrect++;

		resultTimeout = setTimeout(questionScreen, 3 * 1000);
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		count++;
		time=15;
	}

	function wrongAnswerScreen() {
		var ans = "answer" + num.correctAnswer;
		$('#questionDiv').html("<p>Wrong!<br>The correct answer was</p>")
			.append("<p>" + num.ans + "</p>");
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numWrong++;

		resultTimeout = setTimeout(questionScreen, 3 * 1000);
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		count++;
		time=15;
	}

	function noAnswerScreen() {
		console.log("Time's up!");
		var ans = "answer" + num.correctAnswer;
		$('#questionDiv').html("<p>Time's up!<br>The correct answer was</p>")
			.append("<p>" + num.ans + "</p>");		
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numWrong++;

		resultTimeout = setTimeout(questionScreen, 3 * 1000);
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		count++;
		time=15;
	}

	// Capture player's button click to choose an answer
	$('#choice1').on('click', function() {
		console.log("Choice 1 button clicked!");
		if (num.correctAnswer === 1) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice2').on('click', function() {
		console.log("Choice 2 button clicked!");
		if (num.correctAnswer === 2) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice3').on('click', function() {
		console.log("Choice 3 button clicked!");
		if (num.correctAnswer === 3) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice4').on('click', function() {
		console.log("Choice 4 button clicked!");
		if (num.correctAnswer === 4) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
		//correctAnswerScreen();
	});


	//
	// Game over + Replay?
	//

	function gameOverScreen() {

		// Display game results
		$('#timerDiv').empty();
		$('#questionDiv').html("<p>Game over!  Results:</p>");
		$('#resultDiv').html("<p>Correct: " + numCorrect + "</p>")
			.append("<p>Wrong: " + numWrong + "</p>");

		// Display replay button
		$('#buttonDiv').html("<button class='replay'><h2>Play again</h2></button>");

	}

	// Capture player's button click to replay the trivia game
	$('button.replay').on('click', function() {
		console.log("Replay button clicked!");
		time=15;
		count=1;
		numCorrect=0;
		numWrong=0;
		startScreen();
	});

});