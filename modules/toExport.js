const sayHello = (name = 'node.js') => {
  console.log(`Hello ${name}`);
};

exports.user = {
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

// export COMMONDJS
exports.Car = Car;
exports.sayHello = sayHello;
exports.map = map;
