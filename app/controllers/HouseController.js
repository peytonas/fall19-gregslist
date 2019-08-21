import HouseService from "../services/HouseService.js";


let _houseService = new HouseService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let template = ''
  let houses = _houseService.Houses

  houses.forEach((house, index) => {
    template += house.Template
    //NOTE delete using index adding button to template
    // template += `<button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${index})">Delete Car</button></div>`
  })

  // NOTE same as above
  // for (let i = 0; i < cars.length; i++) {
  //   const car = cars[i];
  // }

  document.querySelector("#houses").innerHTML = template

}


export default class houseController {
  constructor() {
    console.log("hello from house controller")
    _draw()
  }

  //NOTE delete car by index
  // deleteCar(index) {
  //   _carService.deleteCar(index)
  //   _draw()
  // }


  //NOTE delete car by id
  deleteHouse(id) {
    _houseService.deleteHouse(id)
    _draw()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      style: form.style.value,
      location: form.location.value,
      price: form.price.value,
      year: form.year.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
    }

    _houseService.addHouse(newHouse)
    _draw()

  }

}