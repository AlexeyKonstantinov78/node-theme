import os from 'node:os';

// os операционная система информция

console.log(os.arch());
//console.log(os);
//console.log(os.cpus());
console.log(os.machine());
console.log(os.platform());
console.log(os.type());
console.log(os.version());
console.log(os.release());
console.log('Название компютера: ', os.hostname());
//console.log(os.networkInterfaces());
console.log('ОБект юзер: ', os.userInfo());

console.log('Оперативная память: ', os.totalmem());
console.log('Свободно оперативной памяти: ', os.freemem());
console.log('Сколько работает комп: ', os.uptime());

console.log('Временный каталог: ', os.tmpdir());
console.log('Каталог юзера ', os.homedir());

