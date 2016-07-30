$(document).ready(function() {
	//
	// Trivia questions and answers
	//
	var trivia = [
		{question: "The 'Picard Maneuver' refers to:",
		answers: [
			"a battle tactic that Capt Picard used to defeat the Borg",
			"the method Capt Picard used to avoid former romantic partners",
			"Patrick Stewart's uniform-straigtening tug",
			"Capt Picard's unique solution to the Kobayashi Maru"
			],
		correctAnswer: 2},

		{question: "The fish in Capt Picard's quarters is named:",
		answers: [
			"Number Two, second only to Commander Riker",
			"Horatio, after the literary inspiration for Capt Picard",
			"Spot, because one of the crew's children named it",
			"Livingston, after one of the show's producers"
			],
		correctAnswer: 3},

		{question: "Lt Worf's prosthetic forehead changed in season 2 because:",
		answers: [
			"the original was stolen",
			"Worf got his forehead ridges enhanced to look more menacing",
			"the show's high ratings brought in money to increase production values",
			"Michael Dorn demanded an upgrade to a more comfortable prosthetic material"
			],
		correctAnswer: 0},

		{question: "The Borg were originally written as:",
		answers: [
			"space vampires, due to the popularity of Anne Rice's novels",
			"shapeshifters, but CG technology of that time was too primitive",
			"insectoids, but were changed to cyborgs due to budget restraints",
			"robots, but producers decided that was too much like Battlestar Galactica"
			],
		correctAnswer: 2},

		{question: "The re-occurring role of Guinan, the mysterious barkeeper, originated when:",
		answers: [
			"fans of the show complained about the lack of women of color on the show",
			"Whoopi Goldberg, a Star Trek fan, asked the producers to create a role for her",
			"network execs decided to bring on a well-known actor to boost ratings",
			"Whoopi Goldberg lost a bet with the head producer"
			],
		correctAnswer: 1},

		{question: "Originally, Data was going to be the Chief Science Officer, but:",
		answers: [
			"the blue uniform clashed with his android makeup",
			"the actor they hired to be Chief Operations Officer abruptly quit",
			"the producers wanted him to be higher in the chain of command",
			"Brent Spiner successfully argued that a CSO didn't really make logical sense"
			],
		correctAnswer: 0},

		{question: "Gene Roddenberry had planned to add gay characters to the show but:",
		answers: [
			"fan outcry against the idea caused him to scrap those plans",
			"network execs got cold feet after Roddenberry's death",
			"writers created a sexually voracious, four-breasted alien, which was deemed ridiculous",
			"the Executive Producer personally vetoed those plans after Roddenberry's death"
			],
		correctAnswer: 3},

		{question: "The number 47 shows up on computer screens, serial numbers, and dates because:",
		answers: [
			"it is the answer to the ultimate question of life, the universe, and everything",
			"Gene Roddenberry's wife was born on April 7",
			"as a joke, a producer's college math professor proved that all numbers are equal to 47",
			"a fortune teller told Gene Roddenberry that the number '47' would bring him success"
			],
		correctAnswer: 2}
	]

	//
	// Set up a new game
	//

	// Initialize variables
	var questionInterval, questionTimeout, resultTimeout,
		time=15,			// Player has 15 sec to answer a question
		count=0,			// Number of questions asked
		numCorrect=0,		// Number of questions correctly answered
		numWrong=0;			// Number of questions incorrectly/not answered

	function startScreen() {

		// Display start screen
		$('#timerDiv, #questionDiv, #resultDiv').empty();
		$('#buttonDiv').html("<button class='start'><h2>Start</h2></button>");
	}

	startScreen();

	// Capture player's button click to start the trivia game
	$(document).on('click', 'button.start', function() {
		console.log("Start button clicked!");
		$('#buttonDiv').empty();
		questionScreen();
	});

	//
	// The Game itself
	//

	var correct = trivia[count].correctAnswer;

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

		if (count === 8) {
			gameOverScreen();
			return;
		} else {
			correct = trivia[count].correctAnswer;
		}

		startTimer();
		questionTimeout = setTimeout(noAnswerScreen, 20 * 1000);

		$('#timerDiv').html("<p>Seconds remaining: " + time + "</p>");
		$('#questionDiv').html("<p>" + trivia[count].question + "</p>");
		$('#resultDiv').empty();
		$('#choice1').html("<p>" + trivia[count].answers[0] + "</p>");
		$('#choice2').html("<p>" + trivia[count].answers[1] + "</p>");
		$('#choice3').html("<p>" + trivia[count].answers[2] + "</p>");
		$('#choice4').html("<p>" + trivia[count].answers[3] + "</p>");

		console.log("Question: " + count + " Correct Answer: " + correct);
	}

	// Capture player's button click to choose an answer

	$('#choice1').on('click', function() {
		console.log("Choice 1 button clicked!");
		if (correct === 0) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice2').on('click', function() {
		console.log("Choice 2 button clicked!");
		if (correct === 1) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice3').on('click', function() {
		console.log("Choice 3 button clicked!");
		if (correct === 2) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	$('#choice4').on('click', function() {
		console.log("Choice 4 button clicked!");
		if (correct === 3) {
			correctAnswerScreen();
		} else wrongAnswerScreen();
	});

	// Was the selection right or wrong?

	function correctAnswerScreen() {
		$('#questionDiv').html("<p>Correct!</p>");
		$('#resultDiv').html('<img src="assets/images/full_of_win.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numCorrect++;
		nextQuestion();
	}

	function wrongAnswerScreen() {
		$('#questionDiv').html("<p>Wrong!<br>The correct answer was</p>")
			.append("<p>" + trivia[count].answers[correct] + "</p>");
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numWrong++;
		nextQuestion();
	}

	function noAnswerScreen() {
		console.log("Time's up! " + correct);
		$('#questionDiv').html("<p>Time's up!<br>The correct answer was</p>")
			.append("<p>" + trivia[count].answers[correct] + "</p>");		
		$('#resultDiv').html('<img src="assets/images/facepalm.jpg">');
		$('#choice1, #choice2, #choice3, #choice4').empty();
		numWrong++;
		nextQuestion();
	}

	// Get ready for the next question

	function nextQuestion() {
		resultTimeout = setTimeout(questionScreen, 4 * 1000);
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		count++;
		time=15;
	}

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
/*	$('button.replay').on('click', function() {*/
	$(document).on('click', 'button.replay',  function() {
		console.log("Replay button clicked!");
		time=15;
		count=0;
		numCorrect=0;
		numWrong=0;
		startScreen();
	});

});