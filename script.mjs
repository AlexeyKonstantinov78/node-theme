//EM JS
import { sayHello, user, Car, map } from "./modules/toExport.mjs";
const car = new Car('mini', 'cooper', user);

console.log(car);

sayHello(car.driver.firstName);

map.set(car, user);
console.log(map);