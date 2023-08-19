//EM JS
import toExport from "./modules/toExport.mjs";
const car = new toExport.Car('mini', 'cooper', toExport.user);

console.log(car);

toExport.sayHello(car.driver.firstName);

toExport.map.set(car, toExport.user);
console.log(toExport.map);