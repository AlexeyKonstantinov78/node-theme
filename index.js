setTimeout(() => {
  console.log('Был диван,');
}, 0);

setTimeout(() => {
  console.log('Выйди вон!');
}, 10);

setTimeout(() => {
  console.log('На диване');
});

process.nextTick(() => {
  console.log('Чемодан,');
});

setImmediate(() => {
  console.log('Кто не верит –');
});

setTimeout(() => {
  console.log('Ехал слон.');
}, 0);

process.nextTick(() => {
  console.log('В чемодане');
});

console.log('Плыл по морю');