import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";
import JobController from "./controllers/JobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController
    }
  }
}
lol
window["app"] = new App()