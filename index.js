console.log('Плыл по морю');

process.nextTick(() => {
  console.log('Чемодан,');
});

process.nextTick(() => {
  console.log('В чемодане');
});

setTimeout(() => {
  console.log('Был диван,');
}, 0);

setImmediate(() => {
  console.log('На диване');
});

setTimeout(() => {
  console.log('Выйди вон!');
}, 10);

setImmediate(() => {
  console.log('Ехал слон.');
});

setImmediate(() => {
  console.log('Кто не верит –');
});


