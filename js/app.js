var ticTacToeApp = angular.module("ticTacToeApp",[]);

ticTacToeApp.controller("TicTacToeController", ['$scope', function($scope){
	$scope.squares = [
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}],
		[{owner:""},{owner:""},{owner:""}]
	];

	$scope.Player_Name_One = "";
	$scope.Player_Name_Two = "";

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

	$scope.startGame = function() {
		
	}

	$scope.move = function(square) {

	}
}]);
