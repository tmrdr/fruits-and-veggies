/* setup your angular app here */
console.log('app.js was loaded.');

angular.module('App', [])
.controller('appCtrl', ['$scope', function($scope){



var fruits = [
  'Apple',
  'Apricot',
  'Banana'
];

var vegetables = [
  'Artichoke',
  'Arugula',
  'Asparagus'
];

$scope.foods = fruits.concat(vegetables);
$scope.vegs = [];
$scope.froots = [];



$scope.click = function(destination, departure, index) {
    $scope[destination].push($scope[departure][index]);
    $scope[departure].splice(index, 1);
  };


console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
console.log($scope.foods);
}]);
