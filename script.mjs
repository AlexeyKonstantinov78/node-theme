//EM JS
import toExport from "./modules/toExport.mjs";

const { sayHello, user, Car, map } = toExport;

const car = new Car('mini', 'cooper', user);

console.log(car);

sayHello(car.driver.firstName);

map.set(car, user);
console.log(map);