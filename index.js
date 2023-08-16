setTimeout(() => {              // 8 вывод
  console.log('Выйди вон!');
}, 10);

setTimeout(() => {
  console.log('Был диван,');    // 4 вывод
}, 0);

process.nextTick(() => {        // 2 вывод
  console.log('Чемодан,');
});

setImmediate(() => {            // 5 вывод
  console.log('На диване');
});

setImmediate(() => {            // 6 вывод
  console.log('Ехал слон.');
});

setImmediate(() => {            // 7 вывод
  console.log('Кто не верит –');
});
 
process.nextTick(() => {        // 3 вывод
  console.log('В чемодане');
});

console.log('Плыл по морю');    // 1 вывод

// setTimeout - 2 штуки
// setImmediate - 3 штуки
// process.nextTick - 2 штуки