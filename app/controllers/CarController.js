import CarService from "../services/CarService.js";


let _cs = new CarService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById("cars-cards").innerHTML = template
  //NOTE delete using index adding button to template
  // template += `<button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${index})">Delete Car</button></div>`
}

// NOTE same as above
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
// }



export default class carController {
  constructor() {
    _cs.addSubscriber("cars", _draw)
    _cs.getApiCars();
  }

  //NOTE delete car by index
  // deleteCar(index) {
  //   _carService.deleteCar(index)
  //   _draw()
  // }

  addCar(event) {
    event.preventDefault();
    let form = event.target

    let data = {
      make: form.make.value,
      model: form.model.value,
      price: form.price.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    _cs.addCar(data)
    form.reset()

  }

  //NOTE delete car by id
  delete(id) {
    if (window.confirm("Are you sure?")) {
      _cs.deleteCar(id)
    }
  }
  bid(id) {
    _cs.bid(id)
  }


}