angular.module('myApp')
   .service('animal', animalService);

function animalService($http, $httpParamSerializerJQLike){

    var url = 'https://animalrestapi.azurewebsites.net/Animal';
    var params = {candidateID: '999630ea-e214-4ab5-9a63-b02f35e73021'};
    var head = {'Content-Type': 'application/x-www-form-urlencoded'};

    this.getAnimals = function(){
    var req = {
      method: 'GET',
      url: url + '/List',
      headers: head,
      params: params
    };
        return $http(req)
          .then(function(response){
          return response.data.list;
      });
    };











}  //end function mainService
