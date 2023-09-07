#!/usr/bin/env node
// шабанг для указания интерпритатора

console.log('Привет CLI!');

// даем права доступа интерпритатору
// chmod +x index.js
// вызываем по имени файла ./index.js
// ./index.js привет это параметр


const args = process.argv.slice(2);
console.log('args: ', args);

console.log('Привет: ', args[0]);
