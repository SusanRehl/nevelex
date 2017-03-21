angular.module('myApp')
   .service('animal', animalService);

function animalService($http, $httpParamSerializerJQLike){

//HITTING API

    var url = 'https://animalrestapi.azurewebsites.net/Animal';
    var params = {candidateID: '999630ea-e214-4ab5-9a63-b02f35e73021'};
    var header = {'Content-Type': 'application/x-www-form-urlencoded'};

//GETTING ANIMAL LIST FOR MAIN PAGE

    this.getAnimals = function(){
    var req = {
      method: 'GET',
      url: url + '/List',
      header: header,
      params: params
    };
        return $http(req)
          .then(function(response){
          return response.data.list;
      });
    };  // end get animal list function

//GETTING ANIMAL DETAILS FOR MODAL

    this.getDetail = function(animalID){
      var req = {
        method: 'GET',
        url: url +'/Id/' + animalID,
        header: header,
        params: params
    };
        return $http(req).then(function(response){
          return response.data.animal;
      });
    };  // end get animal details function

//ADDING A NEW ANIMAL TO API

      this.createNewAnimal = function(name, scientificName, family, imageUrl){
        var animalDetail = {
                commonName: name,
                scientificName: scientificName,
                family: family,
                imageUrl: imageUrl};
                console.log(animalDetail);

        var req = {
          method: 'POST',
          url: url + '/Create',
          headers: header,
          params: params,
          data: $httpParamSerializerJQLike(animalDetail)
      };
          return $http(req).then(function(response){
            return response;
        });
      }; // end create animal function

      this.deleteThisAnimal = function(id){
        var req = {
          method: 'POST',
          url: url + '/Delete/' + id,
          headers: header,
          params: params,
          data: id
        };
          return $http(req).then(function(response){
            return response;
           });
        };  // end delete function


}  //end function mainService
