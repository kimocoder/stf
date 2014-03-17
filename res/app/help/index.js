module.exports = angular.module('help', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/help', {
      template: require('./help.jade'),
      controller: 'HelpCtrl'
    })
  }])
  .controller('HelpCtrl', require('./help-controller'))