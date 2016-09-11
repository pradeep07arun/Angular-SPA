var app = angular.module('plunker', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
    
            $locationProvider.html5Mode(true);
    
    $routeProvider
    
    .when('/home' , {
        
        templateUrl:'views/home.html',
        controller: 'MainCtrl'
    })
    .when('/contact' , {
        
        templateUrl:'views/contact.html',
        controller: 'ContactController'
        
    })
     .when('/contact-success' , {
        
        templateUrl:'views/contact-success.html',
        controller: 'ContactController'
        
    })
    
    .when('/directory', {
        
        templateUrl: 'views/directory.html',
        controller:'MainCtrl'
        
    }).otherwise({
        
        redirectTo: '/home'
    });
    
}]);

app.controller('MainCtrl', ['$http' ,'$scope', function($http,$scope) {
  
  
  $scope.removeNinja = function(ninja) {
    
    var removedNinja = $scope.ninjas.indexOf(ninja);
    
    $scope.ninjas.splice (removedNinja,1);
    
  };
  
  $scope.addNewninja = function () {
    
    $scope.ninjas.push ({
      
    name:$scope.newninja.name,
    belt:$scope.newninja.belt,
    rate:parseInt($scope.newninja.rate),
    available:true
    });
    $scope.newninja.name= "";
    $scope.newninja.belt= "";
    $scope.newninja.rate= "";
    
  };
    
    $scope.removeAll = function() {
        
        $scope.ninjas = [];
    }
    
    $http.get('data/ninjas.json').success (function(data){
        
        $scope.ninjas = data;
        
    });
        
    
}]);
 
    
   app.controller('ContactController', ['$scope', '$location', function ($scope,$location) {
    
    $scope.sendMessage = function() {
                                          
   $location.path('/contact-success');                            
    };
                                          
 }]);
    
    
    
    
    
    
    
    

