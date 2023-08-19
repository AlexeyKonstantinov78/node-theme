console.log("Hello world!");

// commondjs или esmodule?  core module
const { sayHello, user, Car, map } = require('./modules/toExport');

sayHello(user.firstName);

const car = new Car('mini', 'cooper', user);

console.log(car);

sayHello(car.driver.firstName);

map.set(car, user);
console.log(map);