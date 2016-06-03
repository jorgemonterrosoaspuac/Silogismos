(function () {
angular.module('MyApp',['ngMaterial', 'ngMessages'])
.controller('SelectAsyncController', function($timeout, $scope, $mdDialog) {
  $scope.figura = 'No se ha buscado figura';
  $scope.menor = {
    name: '',
    letra:  '',
    distribucion: '',
    figura1: 0
  };
  $scope.mayor = {
    name: '',
    letra:  '',
    distribucion: '',
    figura1: 0
  };
  $scope.conclusion = {
    name: '',
    letra:  '',
    distribucion: '',
    figura1: 0
  };
  $scope.items = [];
  $scope.verify;
  $scope.loadMayors = function() {
    return $timeout(function() {
      $scope.mayors =  $scope.mayors  || [
        { 
          id: 1, 
          name: 'Todo M es P' ,
          letra: 'A',
          distribucion: 'Sujeto Distribuido / Predicado no Distribuido',
          figura: 'M-P',
          figura1: 1,
          figura3: 1
        },
        { 
          id: 2, 
          name: 'Todo P es M' ,
          letra: 'A',
          distribucion: 'Sujeto Distribuido / Predicado no Distribuido', 
          figura: 'P-M',
          figura2: 1,
          figura4: 1
        },
        { 
          id: 3, 
          name: 'Ningun M es P' ,
          letra: 'E',
          distribucion: 'Sujeto Distribuido / Predicado Distribuido', 
          figura: 'M-P',
          figura1: 1,
          figura3: 1
        },
        { 
          id: 4, 
          name: 'Ningun P es M' ,
          letra: 'E',
          distribucion: 'Sujeto Distribuido / Predicado Distribuido',  
          figura:  'P-M',
          figura2: 1,
          figura4: 1
        },
        { 
          id: 5, 
          name: 'Algun M es P' ,
          letra: 'I',
          distribucion: 'Sujeto no Distribuido / Predicado no Distribuido',
          figura:  'M-P',
          figura3: 1
        },
        { 
          id: 6, 
          name: 'Algun P es M' ,
          letra: 'I',
          distribucion: 'Sujeto no Distribuido / Predicado no Distribuido',
          figura:  'P-M',
          figura4: 1
        },
        { 
          id: 7, 
          name: 'Algun M No es P', 
          letra: 'O',
          distribucion: 'Sujeto no Distribuido / Predicado Distribuido',
          figura:  'M-P',
          figura3: 1,
          figura4: 1
        },
        { 
          id: 8, 
          name: 'Algun P No es M',
          letra: 'O',
          distribucion: 'Sujeto no Distribuido / Predicado Distribuido',
          figura:  'P-M',
          figura4: 1
        }
      ];
    }, 650);
  };
  $scope.loads = function() {
    return $timeout(function() {
      $scope.menors =  $scope.menors  || [
        { 
          id: 1, 
          name: 'Todo S es M' ,
          letra: 'A',
          distribucion: 'Sujeto Distribuido / Predicado no Distribuido',
          figura:  'S-M',
          figura1: 1,
          figura2: 1
        },
        { 
          id: 2, 
          name: 'Todo M es S' ,
          letra: 'A',
          distribucion: 'Sujeto Distribuido / Predicado no Distribuido',
          figura:  'M-S',
          figura3: 1,
          figura4: 1
        },
        { 
          id: 3, 
          name: 'Ningun S es M' ,
          letra: 'E',
          distribucion: 'Sujeto Distribuido / Predicado Distribuido',
          figura:  'S-M',
          figura2: 1
        },
        { 
          id: 4, 
          name: 'Ningun M es S' ,
          letra: 'E',
          distribucion: 'Sujeto Distribuido / Predicado Distribuido',
          figura:  'M-S',
          figura4: 1
        },
        { 
          id: 5, 
          name: 'Algun S es M' ,
          letra: 'I',
          distribucion: 'Sujeto no Distribuido / Predicado no Distribuido',
          figura:  'S-M',
          figura1: 1,
          figura2: 1
        },
        { 
          id: 6, 
          name: 'Algun M es S' ,
          letra: 'I',
          distribucion: 'Sujeto no Distribuido / Predicado no Distribuido' ,
          figura:  'M-S',
          figura3: 1,
          figura4: 1
        },
        { 
          id: 7, 
          name: 'Algun S No es M', 
          letra: 'O',
          distribucion: 'Sujeto no Distribuido / Predicado Distribuido',
          figura:  'S-M',
          figura2: 1
        },
        { 
          id: 8, 
          name: 'Algun M No es S',
          letra: 'O',
          distribucion: 'Sujeto no Distribuido / Predicado Distribuido',
          figura:  'M-S',
          figura4: 1
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
          letra: 'A',
          distribucion: 'Sujeto Distribuido / Predicado no Distribuido',
          figura1: 1
        },
        { 
          id: 2, 
          name: 'Ningun S es P' ,
          letra: 'E',
          distribucion: 'Sujeto Distribuido / Predicado Distribuido',
          figura1: 1,
          figura2: 1,
          figura4: 1
        },
        { 
          id: 3, 
          name: 'Algun S es P' ,
          letra: 'I',
          distribucion: 'Sujeto no Distribuido / Predicado no Distribuido',
          figura1: 1,
          figura3: 1,
          figura4: 1
        },
        { 
          id: 4, 
          name: 'Algun S No es P' ,
          letra: 'O',
          distribucion: 'Sujeto no Distribuido / Predicado Distribuido',
          figura1: 1,
          figura2: 1,
          figura3: 1,
          figura4: 1
        }
      ];
    }, 650);        
  };
  $scope.figuras = function(){
    if ($scope.menor.figura1 == 1 && $scope.mayor.figura1 == 1 && $scope.conclusion.figura1 == 1 && $scope.menor.figura == 'S-M' && $scope.mayor.figura == 'M-P') {
      $scope.figura = "Primer Figura";
      alert("Primer Figura");
    } else if ($scope.menor.figura2 == 1 && $scope.mayor.figura2 == 1 && $scope.conclusion.figura2 == 1 && $scope.menor.figura == 'S-M' && $scope.mayor.figura == 'P-M') {
      $scope.figura = "Segunda Figura";
      alert("Segunda Figura");
    } else if ($scope.menor.figura3 == 1 && $scope.mayor.figura3 == 1 && $scope.conclusion.figura3 == 1 && $scope.menor.figura == 'M-S' && $scope.mayor.figura == 'M-P') {
      $scope.figura = "Tercera Figura";
      alert("Tercera Figura");
    } else if ($scope.menor.figura4 == 1 && $scope.mayor.figura4 == 1 && $scope.conclusion.figura4 == 1 && $scope.menor.figura == 'M-S' && $scope.mayor.figura == 'P-M') {
      $scope.figura = "Cuarta Figura";
      alert("Cuarta Figura");
    } else {
      alert("Error al buscar figura compatible, las premisas y conclusion no cumplen los requerimientos");
      $scope.figura = "No hay figura"
    };

    switch ($scope.figura) {
      case "Primer Figura":
        $scope.items = [
          {
            modo:  "BARBARA",
            letras: "AAA"
          },
          {
            modo:  "CELARENT",
            letras: "EAE"
          },
          {
            modo:  "DARII",
            letras: "AII"
          },
          {
            modo:  "FERIO",
            letras: "EIO"
          },
          {
            modo:  "BARBARI",
            letras: "AAI"
          },
          {
            modo:  "CELARON",
            letras: "EAO"
          }];
        break;
      case "Segunda Figura":
        $scope.items = [
          {
            modo:  "CESARE",
            letras: "EAE"
          },
          {
            modo:  "CAMESTRES",
            letras: "AEE"
          },
          {
            modo:  "FESTINO",
            letras: "EIO"
          },
          {
            modo:  "BAROCO",
            letras: "AOO"
          },
          {
            modo:  "CESARO",
            letras: "EAO"
          },
          {
            modo:  "CAMESTROP",
            letras: "AEO"
          }];
        break;
      case "Tercera Figura":
        $scope.items = [
          {
            modo:  "DARAPTI",
            letras: "AAI"
          },
          {
            modo:  "FELAPTON",
            letras: "EAO"
          },
          {
            modo:  "DATISI",
            letras: "AII"
          },
          {
            modo:  "DISAMIS",
            letras: "IAI"
          },
          {
            modo:  "BOKARDO",
            letras: "OAO"
          },
          {
            modo:  "FERISON",
            letras: "EIO"
          }];
        break;
      case "Cuarta Figura":
        $scope.items = [
          {
            modo:  "BAMANTIP",
            letras: "AAI"
          },
          {
            modo:  "CAMENES",
            letras: "AEE"
          },
          {
            modo:  "DIMARIS",
            letras: "IAI"
          },
          {
            modo:  "FESAPO",
            letras: "EAO"
          },
          {
            modo:  "FRESISO",
            letras: "EIO"
          },
          {
            modo:  "CAMENOP",
            letras: "AEO"
          }];
        break;
      default:
        $scope.items = [];
    }
  };
  $scope.verificar   = function(ev){    
    $scope.verify = $scope.mayor.letra + $scope.menor.letra + $scope.conclusion.letra;
    if ($scope.verify == $scope.modoSelect.letras) {
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#body')))
        .clickOutsideToClose(true)
        .title('Silogismo Valido')
        .textContent('El silogismo es correcto.')
        .ariaLabel('Cumple todos los requerimientos')
        .ok('Aceptar')
        .targetEvent(ev)
      );
    } else {
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#body')))
        .clickOutsideToClose(true)
        .title('Silogismo Invalido')
        .textContent('El silogismo es no correcto.')
        .ariaLabel('Existen Errores en las premisas o conclusion')
        .ok('Aceptar')
        .targetEvent(ev)
      );
    };
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
});
})();