import Car from "../models/Car.js";

let _state = {
  cars: [new Car({
    make: "Chevy",
    model: "Tracker",
    year: 1989,
    price: 0,
    imgUrl: "http://carphotos.cardomain.com/ride_images/2/4819/1781/24545890001_large.jpg",
    description: "Itsa trackin"
  })]
}

export default class CarService {

  addCar(newCar) {
    _state.cars.push(new Car(newCar))
    console.log(_state.cars)
  }

  constructor() {
    console.log("hello from service")
  }


  get Cars() {
    // NOTE car is the current car in the array we are making a new object that is a copy to break reference
    //map is returning a new array of all the new copies of objects from the original
    return _state.cars.map(car => new Car(car))

    // NOTE accessing individual car with for loop
    // for (let i = 0; i < _state.cars.length; i++) {
    //   let car = _state.cars[i]
    // }

    // NOTE  using maps iterator to access an individual car
    // return _state.cars.map(function (car) { })

  }
}