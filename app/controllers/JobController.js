import JobService from "../services/JobService.js";


let _js = new JobService()

function _draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById("jobs-cards").innerHTML = template
}

export default class jobController {
  constructor() {
    _js.addSubscriber("jobs", _draw)
    _js.getApiJobs();
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target

    let data = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _js.addJob(data)
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _js.deleteJob(id)
    }
  }
  bid(id) {
    _js.bid(id)
  }
}
