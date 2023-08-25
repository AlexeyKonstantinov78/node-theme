import { EventEmitter } from 'node:events';

//task two

let name = '';
let messag = '';

class Mess extends EventEmitter {
  constructor() {
    super();
    this.name = '';
    this.mess = '';
  }

  sendMessage(username, message) {
    this.name = username;
    this.mess = message;
  }

  receiveMessage() {
    console.log(name + ': ' + messag);
  }

  emit(name, ...args) {
    super.emit(name, ...args);

  }
}

const mess = new Mess();

const sendMessage = (username, message) => {
  name = username;
  messag = message;
};

const receiveMessage = () => {
  console.log(name + ': ' + messag);
};

mess.on('send', sendMessage);
mess.on('send', receiveMessage);

mess.emit('send', 'maks', 'привет');
mess.emit('send', 'Lex', 'привет');
mess.emit('send', 'maks', 'сам с приветом');
