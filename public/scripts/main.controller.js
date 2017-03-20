angular.module('myApp')
    .controller('mainController', mainController);

function mainController(animal) {
console.log("in main controller");

      var main = this;
      main.animalList = [];
      main.animalID = [];
      animal.data = {};
      main.newAnimal = [];

    main.getAllAnimals = function(){
      return animal.getAnimals()
        .then(function(animalList){
          main.animalList = animalList;
        }, function(error){
          console.log('error getting list', error);
        });

    };

    main.getAllAnimals();
    console.log("here's animal list: ", main);

  } // end mainController function
