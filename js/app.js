var ticTacToeApp = angular.module("ticTacToeApp",['firebase']);

ticTacToeApp.controller("TicTacToeController", ['$scope', '$firebase', function($scope, $firebase){

//-------This sets the board up so a game can begin-----------------------------------------------------------//

	$scope.squares = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
	];

	$scope.Player_Name_One = "";
	$scope.Player_Name_Two = "";
	$scope.catsGame = false;
	$scope.isDisabled = true; 

// $scope.game = getGame();

// function getGame() {
// 	var ref = new Firebase("cite from online/where you want to store it");
// 	var game = $firebase(ref).$asObject();
// 	return game;
// }

	// $scope.game = {squares: [
	// 		[{owner:""},{owner:""},{owner:""}],
	// 		[{owner:""},{owner:""},{owner:""}],
	// 		[{owner:""},{owner:""},{owner:""}]
	// 	],

	// 	Player_Name_One: "",
	// 	Player_Name_Two: "",
	// 	catsGame: false,
	// 	isDisabled: true 
	// };

	//$scope.game.$save();

//-------This is where players enter their names and player turns are assigned--------------------------------//

	$scope.submit = function(player) {
		if (player==1) {
			$scope.formOne = true;
			$scope.helloOne = true;
		}
		else if (player==2) {
			$scope.formTwo = true;
			$scope.helloTwo = true;
		}
	
		$scope.Player_Name_One = $scope.inputOne;
		$scope.Player_Name_Two = $scope.inputTwo;
	};

//-------This is where the game is set. Play can't start until "let's play!" button is pressed---------------//
//-------Player 1 always plays first-------------------------------------------------------------------------//

	$scope.startGame = function() {
		$scope.yourTurnOne = true;
		$scope.yourTurnTwo = false;
		$scope.helloOne = false;
		$scope.helloTwo = false;
		$scope.isDisabled = false;
	};

	$scope.Player_Turn = "Player 1";

//-------This is where players make their moves and claim squares--------------------------------------------//
//-------The compare function is automatically invoked after square is claimed-------------------------------//

	$scope.makeMove = function(square){
		if (square.owner == "P1" || square.owner == "P2") {
			alert("Sorry, that square is already taken!");
		} 
		else if ($scope.Player_Turn == "Player 1") {
			square.owner = "P1";
			$scope.Player_Turn = "Player 2";
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = true;
			$scope.compare();
		} 
		else if ($scope.Player_Turn == "Player 2") {
			square.owner = "P2";
			$scope.Player_Turn = "Player 1";
			$scope.yourTurnTwo = false;
			$scope.yourTurnOne = true;
			$scope.compare();
		}

		// $scope.game.$save();
	};

//-------After move is made, the game compares the whole board at once, looking for winning rows/columns-----//

	$scope.compare = function(){
		var square1 = $scope.squares[0][0];
		var square2 = $scope.squares[0][1];
		var square3 = $scope.squares[0][2];
		var square4 = $scope.squares[1][0];
		var square5 = $scope.squares[1][1];
		var square6 = $scope.squares[1][2];
		var square7 = $scope.squares[2][0];
		var square8 = $scope.squares[2][1];
		var square9 = $scope.squares[2][2];
		
		$scope.winnerOne = false;
		$scope.winnerTwo = false;
		$scope.catsGame = false;
		$scope.yourTurnOne = false;
		$scope.yourTurnTwo = false;
		$scope.isDisabled = false;

		if (square1.owner == "P1" && square2.owner == "P1" && square3.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square4.owner == "P1" && square5.owner == "P1" && square6.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square7.owner == "P1" && square8.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square1.owner == "P1" && square4.owner == "P1" && square7.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square2.owner == "P1" && square5.owner == "P1" && square8.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square3.owner == "P1" && square6.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square1.owner == "P1" && square5.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square3.owner == "P1" && square5.owner == "P1" && square7.owner == "P1"){
			$scope.winnerOne = true;
			$scope.isDisabled = true;
		} 
		else if (square1.owner == "P2" && square2.owner == "P2" && square3.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square4.owner == "P2" && square5.owner == "P2" && square6.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square7.owner == "P2" && square8.owner == "P2" && square9.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square1.owner == "P2" && square4.owner == "P2" && square7.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square2.owner == "P2" && square5.owner == "P2" && square8.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square3.owner == "P2" && square6.owner == "P2" && square9.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square1.owner == "P2" && square5.owner == "P2" && square9.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if (square3.owner == "P2" && square5.owner == "P2" && square7.owner == "P2"){
			$scope.winnerTwo = true;
			$scope.isDisabled = true;
		} 
		else if ((square1.owner == "P1" || square1.owner == "P2") && (square2.owner == "P1" || square2.owner == "P2") && (square3.owner == "P1" || square3.owner == "P2") && (square4.owner == "P1" || square4.owner == "P2") && (square5.owner == "P1" || square5.owner == "P2") && (square6.owner == "P1" || square6.owner == "P2") && (square7.owner == "P1" || square7.owner == "P2") && (square8.owner == "P1" || square8.owner == "P2") && (square9.owner == "P1" || square9.owner == "P2")){
			$scope.catsGame = true;
			$scope.isDisabled = true;
		}

		// $scope.game.$save();
	};

//-------When "play again" button is pressed, the board gets cleared with this function--------------------//

	$scope.playAgain = function(square1, square2, square3, square4, square5, square6, square7, square8, square9) {

		$scope.isDisabled = true;
		$scope.winnerOne = false;
		$scope.winnerTwo = false;
		$scope.catsGame = false;
		$scope.yourTurnOne = false;
		$scope.yourTurnTwo = false;
		$scope.formOne = false;
		$scope.formTwo = false;
		
		$scope.Player_Name_One = "";
		$scope.Player_Name_Two = "";

		$scope.inputOne = "";
		$scope.inputTwo = "";

		$scope.squares = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
		];
	};

//-------When "reset game" button is pressed, the board gets cleared with this function--------------------//

	$scope.resetGame = function(square1, square2, square3, square4, square5, square6, square7, square8, square9) {

		$scope.isDisabled = true;
		$scope.winnerOne = false;
		$scope.winnerTwo = false;
		$scope.catsGame = false;
		$scope.yourTurnOne = false;
		$scope.yourTurnTwo = false;
		$scope.formOne = false;
		$scope.formTwo = false;
		
		$scope.Player_Name_One = "";
		$scope.Player_Name_Two = "";

		$scope.inputOne = "";
		$scope.inputTwo = "";

		$scope.squares = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
		];
	};
}]);
