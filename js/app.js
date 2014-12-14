var ticTacToeApp = angular.module("ticTacToeApp",[]);

ticTacToeApp.controller("TicTacToeController", ['$scope', function($scope){
	$scope.squares = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
	];

	$scope.Player_Name_One = "";
	$scope.Player_Name_Two = "";
	$scope.catsGame = false;

	$scope.submit = function(player) {
		if (player==1) {
			$scope.formOne = true;
			$scope.helloOne = true;
		}
		else if (player==2) {
			$scope.formTwo = true;
			$scope.helloTwo = true;
			$scope.startButton = true;
		}
	
		$scope.Player_Name_One = $scope.inputOne;
		$scope.Player_Name_Two = $scope.inputTwo;
	};

	$scope.startGame = function(Player_Name_One, Player_Name_Two){
		if (Player_Name_One == inputOne && Player_Name_Two == inputTwo) {
			$scope.startButton = true;
		}
		else {
			$scope.startButton = false;
		}
	};


	$scope.startGame = function() {
		$scope.yourTurnOne = true;
		$scope.yourTurnTwo = false;
		$scope.startButton = false;
	}

	$scope.Player_Turn = "Player 1";

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
	};

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

		if (square1.owner == "P1" && square2.owner == "P1" && square3.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square4.owner == "P1" && square5.owner == "P1" && square6.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square7.owner == "P1" && square8.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square1.owner == "P1" && square4.owner == "P1" && square7.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square2.owner == "P1" && square5.owner == "P1" && square8.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square3.owner == "P1" && square6.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square1.owner == "P1" && square5.owner == "P1" && square9.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square3.owner == "P1" && square5.owner == "P1" && square7.owner == "P1"){
			$scope.winnerOne = true;
			$scope.winnerTwo = false;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square1.owner == "P2" && square2.owner == "P2" && square3.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square4.owner == "P2" && square5.owner == "P2" && square6.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square7.owner == "P2" && square8.owner == "P2" && square9.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square1.owner == "P2" && square4.owner == "P2" && square7.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square2.owner == "P2" && square5.owner == "P2" && squre8.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square3.owner == "P2" && square6.owner == "P2" && square9.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square1.owner == "P2" && square5.owner == "P2" && square9.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if (square3.owner == "P2" && square5.owner == "P2" && square7.owner == "P2"){
			$scope.winnerOne = false;
			$scope.winnerTwo = true;
			$scope.catsGame = false;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		} 
		else if ((square1.owner == "P1" || square1.owner == "P2") && (square2.owner == "P1" || square2.owner == "P2") && (square3.owner == "P1" || square3.owner == "P2") && (square4.owner == "P1" || square4.owner == "P2") && (square5.owner == "P1" || square5.owner == "P2") && (square6.owner == "P1" || square6.owner == "P2") && (square7.owner == "P1" || square7.owner == "P2") && (square8.owner == "P1" || square8.owner == "P2") && (square9.owner == "P1" || square9.owner == "P2")){
			$scope.winnerOne = false;
			$scope.winnerTwo = false;
			$scope.catsGame = true;
			$scope.yourTurnOne = false;
			$scope.yourTurnTwo = false;
		}
	};
}]);
