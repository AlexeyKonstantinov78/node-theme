import { writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

// os операционная система информция
// path он позволяет создать путь взависимости от платформы

// console.log(os.arch());
// //console.log(os);
// //console.log(os.cpus());
// console.log(os.machine());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.release());
// console.log('Название компютера: ', os.hostname());
// //console.log(os.networkInterfaces());
// console.log('ОБект юзер: ', os.userInfo());

// console.log('Оперативная память: ', os.totalmem());
// console.log('Свободно оперативной памяти: ', os.freemem());
// console.log('Сколько работает комп: ', os.uptime());

// console.log('Временный каталог: ', os.tmpdir());
// console.log('Каталог юзера ', os.homedir());

const filePath = path.join(os.homedir(), 'settings.genpass.json');
console.log('filePath: ', filePath);

console.log(path);
console.log('Базовое имя: ', path.basename(filePath));
console.log('Путь без файла: ', path.dirname(filePath));
console.log('Расширение файла: ', path.extname(filePath));

writeFile(filePath, 'Привет мир', 'utf8');
