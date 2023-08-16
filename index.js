console.log('Плыл по морю');

process.nextTick(() => {
  console.log('Чемодан,');
});

setImmediate(() => {
  console.log('В чемодане');
});

setTimeout(() => {
  console.log('Был диван,');

  process.nextTick(() => {
    console.log('На диване');
  });

  setTimeout(() => {
    console.log('Ехал слон.');

    setImmediate(() => {
      console.log('Кто не верит –');
    });
    
    setImmediate(() => {
      console.log('Выйди вон!');
    });
  }, 0);
  
}, 10);
