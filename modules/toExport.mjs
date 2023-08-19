// module emjs

export const sayHello = (name = 'node.js') => {
  console.log(`Hello ${name}`);
};

export const user = {
  firstName: 'Maks',
  lstName: 'Leskin',
};

export const map = new Map();

export class Car {
  constructor(brand, model, driver) {
    this.brand = brand;
    this.model = model;
    this.driver = driver;
  }
}
