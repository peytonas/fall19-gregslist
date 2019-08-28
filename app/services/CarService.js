import Car from "../models/Car.js";

// @ts-ignore
let _carApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/cars"
})

let _state = {
  cars: []
}

let _subscribers = {
  cars: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CarService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Cars() {
    return _state.cars.map(c => new Car(c))
  }

  getApiCars() {
    _carApi.get()
      .then(res => {
        let carsData = res.data.data.map(c => new Car(c))
        _setState("cars", carsData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addCar(data) {
    _carApi.post("", data)
      .then(res => {
        _state.cars.push(res.data.data)
        _setState("cars", _state.cars)
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteCar(id) {
    _carApi.delete(id)
      .then(res => {
        let index = _state.cars.findIndex(car => car._id == id)
        _state.cars.splice(index, 1)
        _setState("cars", _state.cars)
      })
      .catch(err => {
        console.error(err)
      })
  }

  bid(id) {
    let car = _state.cars.find(c => c._id == id)
    car.price++
    _carApi.put(id, { price: car.price })
      .then(res => {
        _setState("cars", _state.cars)
      })
  }
}