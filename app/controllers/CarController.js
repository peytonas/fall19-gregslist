import CarService from "../services/CarService.js";


let _carService = new CarService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let cars = _carService.Cars
  cars[0].description = "i broked it"

  cars = _carService.Cars
  console.log(cars)


}


export default class CarController {
  constructor() {
    console.log("hello from car controller")
    _draw()
  }
}