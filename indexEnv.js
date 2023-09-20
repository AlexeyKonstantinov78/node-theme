//import dotenv from 'dotenv';
import 'dotenv/config'; // еще вид вывода
//dotenv.config();

console.log(process.env.PATHEXT);
console.log(process.env.PORT);
console.log(process.env.API_KEY);

const port = process.env.PORT || 3000;
console.log('port: ', port);

if (process.env.DEBUG_MODE) {

}

const environment = process.env.NODE_ENV || 'development';
console.log('environment: ', environment);
