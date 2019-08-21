import CarService from "../services/CarService.js";


let _carService = new CarService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let template = ''
  let cars = _carService.Cars

  cars.forEach(car => {
    template += car.Template
  })

  // NOTE same as above
  // for (let i = 0; i < cars.length; i++) {
  //   const car = cars[i];
  // }

  document.querySelector("#cars").innerHTML = template

}


export default class CarController {
  constructor() {
    console.log("hello from car controller")
    _draw()
  }
}