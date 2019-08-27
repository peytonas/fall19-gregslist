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
}

export default class carController {
  constructor() {
    _cs.addSubscriber("cars", _draw)
    _cs.getApiCars();
  }

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

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _cs.deleteCar(id)
    }
  }
  bid(id) {
    _cs.bid(id)
  }


}