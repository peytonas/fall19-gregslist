import HouseService from "../services/HouseService.js";


let _hs = new HouseService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById("houses-cards").innerHTML = template
}


export default class houseController {
  constructor() {
    _hs.addSubscriber("houses", _draw)
    _hs.getApiHouses();
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target

    let data = {
      location: form.location.value,
      price: form.price.value,
      year: form.year.value,
      description: form.description.value,
      levels: form.levels.value,
      bathrooms: form.bathrooms.value,
      bedrooms: form.bedrooms.value,
      imgUrl: form.imgUrl.value,
    }
    _hs.addHouse(data)
    form.reset()

  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _hs.deleteHouse(id)
    }
  }
  bid(id) {
    _hs.bid(id)
  }


}
