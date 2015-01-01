angular
	.module('ticTacToeApp')
	.controller('TicTacToeController', TicTacToeController);

	TicTacToeController.$inject = ['$firebase'];

	function TicTacToeController($firebase) {
		var controller = this;

		controller.game = getGameObject();
		controller.getGameWindow = getGameWindow;
		controller.submit = submit;
		controller.startGame = startGame;
		controller.resetGame = resetGame;
		controller.playAgain = playAgain;
		controller.makeMove = makeMove;
		controller.compare = compare;
		controller.switchPlayers = switchPlayers;
		
		// controller.welcomeWindow = true;
		// controller.gameWindow = false;

			// 	$scope.triggerInfoBox = function(){
			// $scope.infoBoxView = true;

		
		controller.welcomeWindow = true;
		controller.gameWindow = false;


		function getGameObject() {
			var ref = new Firebase('https://chalkboardtictactoe.firebaseio.com/game');
			return $firebase(ref).$asObject();
		}

		function getGameWindow() {
			controller.welcomeWindow = false;
			controller.gameWindow = true;
			newGame();

			controller.game.$save();
		}

//-------This sets the board up so a game can begin-----------------------------------------------------------//

		function newGame() {
			controller.game.squares = [
				[{owner:"", color:false},{owner:"", color:false},{owner:"", color:false}],
				[{owner:"", color:false},{owner:"", color:false},{owner:"", color:false}],
				[{owner:"", color:false},{owner:"", color:false},{owner:"", color:false}]
			];

			controller.game.Player_Name_One = "";
			controller.game.Player_Name_Two = "";
			controller.game.helloOne = false;
			controller.game.helloTwo = false;
			controller.game.catsGame = false;
			controller.game.isDisabled = true; 
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.winnerOne = false;
			controller.game.winnerTwo = false;
			controller.game.formOne = false;
			controller.game.formTwo = false;
			controller.game.playerOneWins = 0;
			controller.game.playerTwoWins = 0;
			controller.game.totalGames = 0;
			controller.game.Player_Turn = "Player 1";
			
			controller.game.$save();
		};



//-------This is where players enter their names and player turns are assigned--------------------------------//

		function submit(player) {
			if (player==1) {
				controller.game.formOne = true;
				controller.whichSide = 'Player 1';
				controller.game.helloOne = true;
				controller.game.Player_Name_One = controller.inputOne;
			}
			else if (player==2) {
				controller.game.formTwo = true;
				controller.whichSide = 'Player 2';
				controller.game.helloTwo = true;
				controller.game.Player_Name_Two = controller.inputTwo;
			};

			controller.game.$save();
		};

//-------This is where the game is set. Play can't start until "let's play!" button is pressed---------------//
//-------Player 1 always plays first-------------------------------------------------------------------------//

		function switchPlayers() {
			if (controller.game.totalGames%2 == 0) {
				controller.game.Player_Turn = "Player 1";
				controller.game.yourTurnOne = true;
				controller.game.yourTurnTwo = false;
			}
			else {
				controller.game.Player_Turn = "Player 2";
				controller.game.yourTurnOne = false;
				controller.game.yourTurnTwo = true;
			}

			controller.game.$save();
		};

		function startGame() {
			switchPlayers();
			controller.game.helloOne = false;
			controller.game.helloTwo = false;
			controller.game.isDisabled = false;

			controller.game.$save();
		};

	

//-------This is where players make their moves and claim squares--------------------------------------------//
//-------The compare function is automatically invoked after square is claimed-------------------------------//

		function makeMove(square) {
			if (square.owner == "P1" || square.owner == "P2") {
				alert("Sorry, that square is already taken!");
			} 
			else if (controller.game.Player_Turn == 'Player 1' && controller.whichSide == 'Player 1') {
				square.owner = "P1";
				controller.game.Player_Turn = "Player 2";
				controller.game.yourTurnOne = false;
				controller.game.yourTurnTwo = true;
				controller.compare();
			} 
			else if (controller.game.Player_Turn == 'Player 2' && controller.whichSide == 'Player 2') {
				square.owner = "P2";
				controller.game.Player_Turn = "Player 1";
				controller.game.yourTurnTwo = false;
				controller.game.yourTurnOne = true;
				controller.compare();
			}

			controller.game.$save();
		};

//-------After move is made, the game compares the whole board at once, looking for winning rows/columns-----//

		function compare() {
			var square1 = controller.game.squares[0][0];
			var square2 = controller.game.squares[0][1];
			var square3 = controller.game.squares[0][2];
			var square4 = controller.game.squares[1][0];
			var square5 = controller.game.squares[1][1];
			var square6 = controller.game.squares[1][2];
			var square7 = controller.game.squares[2][0];
			var square8 = controller.game.squares[2][1];
			var square9 = controller.game.squares[2][2];

		if (square1.owner == "P1" && square2.owner == "P1" && square3.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square1.color = square2.color = square3.color = true;
		} 
		else if (square4.owner == "P1" && square5.owner == "P1" && square6.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square4.color = square5.color = square6.color = true;
		} 
		else if (square7.owner == "P1" && square8.owner == "P1" && square9.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square7.color = square8.color = square9.color = true;
		} 
		else if (square1.owner == "P1" && square4.owner == "P1" && square7.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square1.color = square4.color = square7.color = true;
		} 
		else if (square2.owner == "P1" && square5.owner == "P1" && square8.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square2.color = square5.color = square8.color = true;
		} 
		else if (square3.owner == "P1" && square6.owner == "P1" && square9.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square3.color = square6.color = square9.color = true;
		} 
		else if (square1.owner == "P1" && square5.owner == "P1" && square9.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square1.color = square5.color = square9.color = true;
		} 
		else if (square3.owner == "P1" && square5.owner == "P1" && square7.owner == "P1"){
			controller.game.winnerOne = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerOneWins += 1;
			controller.game.totalGames += 1;
			square3.color = square5.color = square7.color = true;
		} 
		else if (square1.owner == "P2" && square2.owner == "P2" && square3.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square1.color = square2.color = square3.color = true;
		} 
		else if (square4.owner == "P2" && square5.owner == "P2" && square6.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square4.color = square5.color = square6.color = true;
		} 
		else if (square7.owner == "P2" && square8.owner == "P2" && square9.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square7.color = square8.color = square9.color = true;
		} 
		else if (square1.owner == "P2" && square4.owner == "P2" && square7.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square1.color = square4.color = square7.color = true;
		} 
		else if (square2.owner == "P2" && square5.owner == "P2" && square8.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square2.color = square5.color = square8.color = true;
		} 
		else if (square3.owner == "P2" && square6.owner == "P2" && square9.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			square3.color = square6.color = square9.color = true;
		} 
		else if (square1.owner == "P2" && square5.owner == "P2" && square9.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square1.color = square5.color = square9.color = true;
		} 
		else if (square3.owner == "P2" && square5.owner == "P2" && square7.owner == "P2"){
			controller.game.winnerTwo = true;
			controller.game.isDisabled = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.playerTwoWins += 1;
			controller.game.totalGames += 1;
			square3.color = square5.color = square7.color = true;
		} 
		else if ((square1.owner == "P1" || square1.owner == "P2") && (square2.owner == "P1" || square2.owner == "P2") && (square3.owner == "P1" || square3.owner == "P2") && (square4.owner == "P1" || square4.owner == "P2") && (square5.owner == "P1" || square5.owner == "P2") && (square6.owner == "P1" || square6.owner == "P2") && (square7.owner == "P1" || square7.owner == "P2") && (square8.owner == "P1" || square8.owner == "P2") && (square9.owner == "P1" || square9.owner == "P2")){
			controller.game.catsGame = true;
			controller.game.yourTurnOne = false;
			controller.game.yourTurnTwo = false;
			controller.game.isDisabled = true;
			controller.game.totalGames += 1;
		}		
			controller.game.$save();
		};

	// -------- Color the Winning Combinations -------- //

//-------When "play again" button is pressed, the board gets cleared with this function--------------------//

	function playAgain() {

		var keepPlayerOne = controller.game.Player_Name_One;
		var keepPlayerTwo = controller.game.Player_Name_Two;
		var keepPlayerOneWins = controller.game.playerOneWins;
		var keepPlayerTwoWins = controller.game.playerTwoWins;
		var keepTotalGames = controller.game.totalGames;

		newGame();

		controller.game.Player_Name_One = keepPlayerOne;
		controller.game.Player_Name_Two = keepPlayerTwo;
		controller.game.playerOneWins = keepPlayerOneWins;
		controller.game.playerTwoWins = keepPlayerTwoWins;
		controller.game.totalGames = keepTotalGames;
		controller.game.isDisabled = false;
		controller.game.formOne = true;
		controller.game.formTwo = true;

		switchPlayers();

		controller.game.$save();
	};

			// 	controller.game.gameOver = false;
			// $scope.newPlayers = angular.copy($scope.players);
			// $scope.newBoard = angular.copy($scope.gameContainer);

//-------When "reset game" button is pressed, the board gets cleared with this function--------------------//

	function resetGame() {

		newGame();

		controller.inputOne = "";
		controller.inputTwo = "";
		controller.game.$save();
	};

};

