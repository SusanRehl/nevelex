angular.module('myApp')
    .controller('mainController', mainController);

function mainController(animal) {
console.log("in main controller");

      var main = this;
      main.animalList = [];
      main.animalID = [];
      animal.data = {};
      main.newAnimal = [];

//GETS ANIMAL LIST

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

//GETS ID OF ANIMAL CLICKED ON AND GETS DETAILS FOR THAT ANIMAL

    main.getThisID = function(thisId){
      main.getAnimalDetail(thisId);
    };

    main.getAnimalDetail = function(id){
      return animal.getDetail(id)
      .then(function(animalInfo){
      main.info = animalInfo;
    }, function(error){
      console.log("error getting this animal's details", error);
    });
  };
  console.log("animal details: ", main);

  } // end mainController function
