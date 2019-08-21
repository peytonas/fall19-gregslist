import CarController from "./controllers/CarController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController()
    }
  }
}

window["app"] = new App()