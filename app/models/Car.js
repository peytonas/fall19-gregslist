

export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }
}