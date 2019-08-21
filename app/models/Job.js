export default class Job {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.company = data.company
    this.position = data.position
    this.pay = data.pay
    this.description = data.description || "No description provided"
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-3">
        <h1>${this.company}</h1>
        <h3>${this.position}</h3>
        <h3>${this.pay}</h3>
        <p>${this.description}</p>
        <img src="${this.imgUrl}" alt="" height="100px" width="100px">
        <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${this._id})">Delete Job</button>
      </div>
    `
  }
}