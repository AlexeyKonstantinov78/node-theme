console.log("Hello world!");
const fs = require("node:fs/promises"); // иморт встроенных

// commondjs или esmodule?  core module
const { sayHello, user, Car, map } = require('./modules/toExport');

sayHello(user.firstName);

const car = new Car('mini', 'cooper', user);

console.log(car);

sayHello(car.driver.firstName);

map.set(car, user);
console.log(map);

try{
  fs.writeFile('output.txt', JSON.stringify(car), 'utf8');
} catch(e){
  console.log(e);
}