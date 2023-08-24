import { EventEmitter } from 'node:events';

//task one
class Tick extends EventEmitter {
  constructor(count) {
    super();
    this.count = count;
    this.i = 0;
  }

  emit(name, ...args) {
    super.emit(name, ...args);
    console.log(name + ' - ' + this.i);
    this.i += 1;
    if (this.i <= this.count) {
      setTimeout(() => {
        this.emit(name);
      }, 1000);
    }
  }
}

const tick = new Tick(8);
tick.on('Tick', () => { });
tick.emit('Tick');
