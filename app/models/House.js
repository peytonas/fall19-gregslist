export default class House {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.style = data.style
    this.location = data.location
    this.price = data.price
    this.year = data.year
    this.description = data.description || "No description provided"
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-3">
        <h1>${this.style}</h1>
        <h3>${this.location}</h3>
        <h3>${this.price}</h3>
        <p>${this.year}</p>
        <p>${this.description}</p>
        <img src="${this.imgUrl}" alt="" height="100px" width="100px">
        <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete House</button>
      </div>
    `
  }
}