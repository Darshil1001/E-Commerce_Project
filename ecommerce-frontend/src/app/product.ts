export class Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;

  constructor(id: number, name: string, price: number, imgUrl: string, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
    this.description = description;
  }
}
