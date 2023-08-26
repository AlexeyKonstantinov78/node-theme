import { EventEmitter } from 'node:events';

//task two
class Mess extends EventEmitter {
  constructor() {
    super();
    this.name = '';
    this.mess = '';
    this.on('send', this.receiveMessage);
  }

  sendMessage(username, message) {
    this.name = username;
    this.mess = message;
    this.emit('send');
  }

  receiveMessage() {
    console.log(this.name + ': ' + this.mess);
  }

  emit(name, ...args) {
    super.emit(name, ...args);
  }
}

const mess = new Mess();

mess.sendMessage('maks', 'привет');
mess.sendMessage('Lex', 'привет');
