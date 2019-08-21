import CarService from "../services/CarService.js";


let _carService = new CarService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let template = ''
  let cars = _carService.Cars

  cars.forEach((car, index) => {
    template += car.Template
    //NOTE delete using index adding button to template
    // template += `<button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${index})">Delete Car</button></div>`
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

  //NOTE delete car by index
  // deleteCar(index) {
  //   _carService.deleteCar(index)
  //   _draw()
  // }


  //NOTE delete car by id
  deleteCar(id) {
    _carService.deleteCar(id)
    _draw()
  }

  addCar(event) {
    event.preventDefault()
    let form = event.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value
    }

    _carService.addCar(newCar)
    _draw()

  }

}