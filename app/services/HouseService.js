import House from "../models/House.js";

let _state = {
  houses: [new House({
    style: "Humble",
    location: "Beach Side",
    price: 50,
    year: 1957,
    imgUrl: "https://cdn-02.independent.ie/incoming/article29047074.ece/35dd9/AUTOCROP/w620/rundown-house-ts.jpg",
    description: "A real bargain!"
  })]
}

export default class HouseService {
  //NOTE delete car by id
  deleteHouse(id) {
    _state.house.forEach((house, i) => {
      if (house._id == id) {
        _state.houses.splice(i, 1)
      }
    })
  }

  //NOTE delete car by index
  // deleteCar(index) {
  //   _state.cars.splice(index, 1)
  // }

  addHouse(newHouse) {
    _state.House.push(new House(newHouse))
    console.log(_state.Houses)
  }

  constructor() {
    console.log("hello from service")
    console.log(_state.cars)

  }


  get Houses() {
    // NOTE car is the current car in the array we are making a new object that is a copy to break reference
    //map is returning a new array of all the new copies of objects from the original
    return _state.houses.map(house => new House(house))

    // NOTE accessing individual car with for loop
    // for (let i = 0; i < _state.cars.length; i++) {
    //   let car = _state.cars[i]
    // }

    // NOTE  using maps iterator to access an individual car
    // return _state.cars.map(function (car) { })

  }
}