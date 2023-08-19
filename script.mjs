//EM JS
const promise = import("./modules/toExport.mjs");
console.log('promise: ', promise);

promise.then(({Car, map, user, sayHello}) => {

  const car = new Car('mini', 'cooper', user);
  
  console.log(car);
  
  sayHello(car.driver.firstName);
  
  map.set(car, user);
  console.log(map);
});
