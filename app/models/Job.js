export default class Job {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.company = data.company
    this.position = data.position
    this.pay = data.pay
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>${this.company}</h1>
        <h3>${this.position}</h3>
        <img src="${this.imgUrl}" alt="">
        <h3>${this.pay}</h3>
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${this._id})">Delete Car</button>
      </div>
    `
  }
}