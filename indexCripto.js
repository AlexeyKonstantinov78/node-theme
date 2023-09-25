import crypto from 'node:crypto';
import { readFile } from 'node:fs/promises';

const data = 'hello world';
const dataFile = await readFile('public/img/laptop.png');

// хеширование данных
const hash = crypto.createHash('sha256').update(data).digest('hex');
const hashFile = crypto.createHash('sha256').update(dataFile).digest('hex');

console.log(hash);
console.log('hashFile: ', hashFile);

// получение случайних данных
const randomBytes = crypto.randomBytes(16);
console.log('randomBytes: ', randomBytes);
console.log('randomBytes(STRING): ', randomBytes.toString());
console.log('randomBytes(HEX): ', randomBytes.toString('hex'));
console.log('randomBytes(base64): ', randomBytes.toString('base64'));
console.log('randomBytes(binary): ', randomBytes.toString('binary'));

// шифровать и дешифровать
// получим рандом ключь
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // всегда используется 16 байт

// алгоритм шифрования
const algoritm = 'aes-256-cbc';

const text = 'Hello Nodejs, Crypto!';

// ширование
const cipher = crypto.createCipheriv(algoritm, key, iv);

let encrypted = cipher.update(text, 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log('encrypted: ', encrypted);

// расшифрование
const decipher = crypto.createDecipheriv(algoritm, key, iv);
let decripted = decipher.update(encrypted, 'hex', 'utf-8');
decripted += decipher.final('utf-8');
console.log('decripted: ', decripted);
