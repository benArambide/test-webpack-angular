


var pruebaControll = function( ngModule )
{
   ngModule.controller('pruebaControl', ['$scope', function( $scope ){
      
      $scope.pruebaMensaje = 'holaaaaaaaaaaaaaaaaaaaaa';

   }])
}

module.exports = pruebaControll;