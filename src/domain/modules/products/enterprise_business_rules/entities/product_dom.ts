export class ProductDom {
  id: number;
  name: string;
  description: string;
  price: number;

  constructor(id: number, name: any, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export function buildMakeProducts() {
  return function execute(item: any) {
    const product = new ProductDom(
      item.id,
      item.name,
      item.description,
      item.price
    );
    return Object.freeze(product);
  };
}
