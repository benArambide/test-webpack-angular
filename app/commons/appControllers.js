

var angular = require('angular');

var ngAppControllers = angular.module('appControllers', []);

var mainControl = require('../modules/main/controllers');
var pruebaControl = require('../modules/prueba/controllers');


mainControl( ngAppControllers );
pruebaControl( ngAppControllers );


module.exports = ngAppControllers;