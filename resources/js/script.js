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
	  $mdThemingProvider.theme('black')
        .primaryPalette('grey', {
            'default': 'A700', // by default use shade 900 from the grey palette for primary intentions
            
        });
 
    $mdThemingProvider.setDefaultTheme('black');
	});
	
	