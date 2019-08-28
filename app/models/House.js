export default class House {
  constructor(data) {
    this._id = data._id
    this.location = data.location
    this.price = data.price
    this.year = data.year
    this.description = data.description
    this.levels = data.levels
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.year} - ${this.location} - ${this.levels} - ${this.bathrooms} - ${this.bedrooms}</h5>
            <p class="card-text">${this.description}</p>
            <p><sm>${this.price}</sm></p>
            <button class="btn btn-info" onclick="app.controllers.houseController.bid('${this._id}')">Bid</button>
            <button class="btn btn-danger" onclick="app.controllers.houseController.delete('${this._id}')">Delete House</button>
        </div>
      </div>
    </div>
    `
  }
}