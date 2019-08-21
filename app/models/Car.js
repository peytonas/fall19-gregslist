export default class Car {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.description = data.description || "No description provided"
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-3">
        <h1>${this.make}</h1>
        <h3>${this.model}</h3>
        <h3>${this.price}</h3>
        <p>${this.year}</p>
        <p>${this.description}</p>
        <img src="${this.imgUrl}" alt="" height="130px" width="130px">
        <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${this._id})">Delete Car</button>
      </div>
    `
  }
}