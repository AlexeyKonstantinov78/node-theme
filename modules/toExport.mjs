// module emjs

const sayHello = (name = 'node.js') => {
  console.log(`Hello ${name}`);
};

const user = {
  firstName: 'Maks',
  lstName: 'Leskin',
};

const map = new Map();

class Car {
  constructor(brand, model, driver) {
    this.brand = brand;
    this.model = model;
    this.driver = driver;
  }
}


export { sayHello, user, map, Car };