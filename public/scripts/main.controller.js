angular.module('myApp').controller('mainController', mainController);

function mainController(animal) {
console.log("in main controller");

      var main = this;
      main.animalList = [];
      main.animalID = [];
      animal.data = {};
      main.newAnimal = [];
      main.info = [];

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

    main.getAnimalDetail = function(id){
      return animal.getDetail(id)
      .then(function(animalInfo){
           main.info = animalInfo;
           console.log("animal details: ", main.info);
       }, function(error){
           console.log("error getting this animal's details", error);
       });
    };

    main.getThisID = function(thisId){
        main.getAnimalDetail(thisId);
    };

      main.createAnimal = function(name, scientificName, family, imageUrl){
        return animal.createNewAnimal(name, scientificName, family, imageUrl)
          .then(function(response){
            main.animalList = [];
            main.getAllAnimals();

            //clear form
            main.commonName = '';
            main.scientificName = '';
            main.family = '';
            main.imageUrl = '';

          }, function(error){
            console.log('error creating animal', error);
          });
      };



  } // end mainController function
