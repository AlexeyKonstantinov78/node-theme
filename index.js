// события  Event Emmitter (патерн)
import { EventEmitter } from 'node:events';

class Ee extends EventEmitter {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  sleep(ms) {
    const emit = this.emit;
    this.emit = () => { };
    setTimeout(() => {
      this.emit = emit;
    }, ms);
  }

  emit(name, ...args) {
    super.emit(name, ...args);
    console.log('logger', name, ...args);
  }
};

const ee = new Ee();

// ограниечение по количеству событий по умолчанию 10
//ee.setMaxListeners(1);
console.log(ee.getMaxListeners());

const logger = (...arg) => {
  console.log('logger arg:', arg);
};

//напишем свое событие
ee.addListener('foo', (x) => {
  console.log('addListener!', x);
});

// тоже самое что addListner
ee.on('foo', logger);

ee.on('bar', (x) => {
  console.log('on! bar', x);
});

// событие once срабатывает один раз
ee.once('foo', (x) => {
  console.log('once!', x);
});

// запуск листнера с логированием после самомго события
ee.prependListener('foo', (...args) => {
  console.log('foo loger', 'args: ', args);
});
// изменение вызова обекта события
ee.prependListener('foo', (x) => {
  x.cia = 'шпион';
});

ee.on('error', (err) => {
  console.log(err);
});

// инициалихзация события
ee.emit('foo', { a: 1 });
ee.emit('foo', { b: 1 });
ee.emit('foo', { c: 1 });
ee.emit('bar', { c: 1 });
//ee.removeAllListeners(); // удаление всех обработчиков
//ee.removeAllListeners('bar'); // удаление одного обработчиков
ee.removeListener('foo', logger); // удаление с функцией logger
ee.off('foo', logger);
// удаление с функцией logger ee.removeListener('foo', logger) тоже самое
ee.emit('foo', { a: 666 });
ee.emit('foo', { b: 777 });
ee.emit('foo', { c: 888 });
ee.emit('bar', { c: 999 });
ee.emit('error');

// сколько листнеров навешано
console.log(ee.listenerCount('foo'));
console.log(ee.listeners());

const usee = new Ee({ name: 'Mark', age: 33 });

usee.on('fo1', (x) => {
  console.log('on fo1', x);
});

usee.on('bar1', (x) => {
  console.log('on bar1', x);
});

usee.emit('bar1', { a: 1 });
usee.emit('fo1', { b: 2 });

usee.sleep(1000);

setTimeout(() => {
  usee.emit('bar1', { a: 3 });
  usee.emit('fo1', { b: 4 });
}, 500);

setTimeout(() => {
  usee.emit('bar1', { a: 5 });
  usee.emit('fo1', { b: 6 });
}, 1500);
