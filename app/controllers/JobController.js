import JobService from "../services/JobService.js";


let _jobService = new JobService()

//  NOTE draw all the cars
// get cars from the service
// the element to inject the cars template into
function _draw() {
  let template = ''
  let jobs = _jobService.Jobs

  jobs.forEach((job, index) => {
    template += job.Template
    //NOTE delete using index adding button to template
    // template += `<button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${index})">Delete Car</button></div>`
  })

  // NOTE same as above
  // for (let i = 0; i < cars.length; i++) {
  //   const car = cars[i];
  // }

  document.querySelector("#jobs").innerHTML = template

}


export default class JobController {
  constructor() {
    console.log("hello from job controller")
    _draw()
  }

  //NOTE delete car by index
  // deleteCar(index) {
  //   _carService.deleteCar(index)
  //   _draw()
  // }


  //NOTE delete car by id
  deleteJob(id) {
    _jobService.deleteJob(id)
    _draw()
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJob = {
      style: form.style.value,
      location: form.location.value,
      price: form.price.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    _jobService.addJob(newJob)
    _draw()

  }

}