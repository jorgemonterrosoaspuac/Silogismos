(function () {
angular.module('MyApp',['ngMaterial', 'ngMessages'])
.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.loadUsers = function() {
    return $timeout(function() {
      $scope.users =  $scope.users  || [
        { 
          id: 1, 
          name: 'Todo M es P' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 2, 
          name: 'Todo P es M' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 3, 
          name: 'Ningun M es P' ,
          letra: 'e',
          distribucion: 'no'  
        },
        { 
          id: 4, 
          name: 'Ningun P es M' ,
          letra: 'e',
          distribucion: 'no'  
        },
        { 
          id: 5, 
          name: 'Algun M es P' ,
          letra: 'i',
          distribucion: 'si'  
        },
        { 
          id: 6, 
          name: 'Algun P es M' ,
          letra: 'i',
          distribucion: 'si'  
        },
        { 
          id: 7, 
          name: 'Algun M no es P', 
          letra: 'o',
          distribucion: 'no'  
        },
        { 
          id: 8, 
          name: 'Algun P no es M',
          letra: 'o',
          distribucion: 'no'  
        }
      ];
    }, 650);
  };
  $scope.loads = function() {
    return $timeout(function() {
      $scope.menors =  $scope.menors  || [
        { 
          id: 1, 
          name: 'Todo M es P' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 2, 
          name: 'Todo P es M' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 3, 
          name: 'Ningun M es P' ,
          letra: 'e',
          distribucion: 'no'  
        },
        { 
          id: 4, 
          name: 'Ningun P es M' ,
          letra: 'e',
          distribucion: 'no'  
        },
        { 
          id: 5, 
          name: 'Algun M es P' ,
          letra: 'i',
          distribucion: 'si'  
        },
        { 
          id: 6, 
          name: 'Algun P es M' ,
          letra: 'i',
          distribucion: 'si'  
        },
        { 
          id: 7, 
          name: 'Algun M no es P', 
          letra: 'o',
          distribucion: 'no'  
        },
        { 
          id: 8, 
          name: 'Algun P no es M',
          letra: 'o',
          distribucion: 'no'  
        }
      ];
    }, 650);        
  };
  $scope.loadc = function() {
    return $timeout(function() {
      $scope.conclusions =  $scope.conclusions  || [
        { 
          id: 1, 
          name: 'Todo S es P' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 2, 
          name: 'Ningun S es P' ,
          letra: 'a',
          distribucion: 'si'  
        },
        { 
          id: 3, 
          name: 'Algun S es P' ,
          letra: 'e',
          distribucion: 'no'  
        },
        { 
          id: 4, 
          name: 'Algun S no es P' ,
          letra: 'e',
          distribucion: 'no'  
        }
      ];
    }, 650);        
  };
}).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', {
      'default': '800', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('blue', {
      'default': '800' // use shade 200 for default, and keep all other shades the same
    });
});;


  'use strict';
  angular.module('tabsDemoDynamicHeight', ['ngMaterial'] ).controller('AppCtrl', AppCtrl).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('purple', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });
});
  function AppCtrl ( $scope ) {
    $scope.data = {
      selectedIndex: 0,
      secondLocked:  true,
      secondLabel:   "Item Two",
      bottom:        false
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }
})();