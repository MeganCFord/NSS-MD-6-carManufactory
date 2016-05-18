/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  this.manufactured_date = Date.now();
  // Create the manufactured date property (see above)
}
Car.prototype.constructor = Car;
/*
  Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car

Make.prototype = new Car();
Make.prototype.constructor = Make;

/*
  Create a new constructor function for the make of your favorite car.
  It will inherit from the general Make function.
 */
function Chevrolet (name) {
  this.modelName = name;
}
Chevrolet.prototype = new Make("Chevrolet");
Chevrolet.prototype.constructor = Chevrolet;

/*
    Create a constructor function named after your 
    favorite car model with one argument that will 
    hold the specific name of the model (see example below). 

    Set its prototype to a new instance of the make you defined
    above and pass in the string value of the model.

    Define a property to hold the name of the model and set its
    value to the argument value.

*/
function Camaro (specificName) {
  this.specificName = specificName;
  this.licensePlate = '';

}
// Set the prototype to appropriate model you created above and set the model name argument
Camaro.prototype = new Chevrolet("Camaro");
Camaro.prototype.constructor = Camaro;

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new instances for each of your three favorite cars.

    Create a new property on each object to hold the license plate
    number for each car.
*/

var yoshi = new Camaro ("Yoshi");
var mario = new Camaro ("Mario");
var luigi = new Camaro ("Luigi");

yoshi.licensePlate = "y05h1";
mario.licensePlate = "mar10";
luigi.licensePlate = "lu191";


//note dir doesn't work here. 
console.log("the cars", yoshi, mario, luigi);


