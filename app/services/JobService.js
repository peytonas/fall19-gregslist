import Job from "../models/Job.js";

let _state = {
  jobs: [new Job({
    company: "Your Mom",
    position: "Goes to College",
    pay: 0,
    imgUrl: "https://i0.wp.com/chartcons.com/wp-content/uploads/wierd-interview-questions5.jpg?resize=1021%2C580&ssl=1",
    description: "got eem"
  })]
}

export default class JobService {
  //NOTE delete job by id
  deleteJob(id) {
    _state.job.forEach((job, i) => {
      if (job._id == id) {
        _state.jobs.splice(i, 1)
      }
    })
  }

  //NOTE delete job by index
  // deletejob(index) {
  //   _state.jobs.splice(index, 1)
  // }

  addJob(newjob) {
    _state.jobs.push(new Job(newjob))
    console.log(_state.jobs)
  }

  constructor() {
    console.log("hello from service")
    console.log(_state.jobs)

  }


  get Jobs() {
    // NOTE job is the current job in the array we are making a new object that is a copy to break reference
    //map is returning a new array of all the new copies of objects from the original
    return _state.jobs.map(job => new Job(job))

    // NOTE accessing individual job with for loop
    // for (let i = 0; i < _state.jobs.length; i++) {
    //   let job = _state.jobs[i]
    // }

    // NOTE  using maps iterator to access an individual job
    // return _state.jobs.map(function (job) { })

  }
}