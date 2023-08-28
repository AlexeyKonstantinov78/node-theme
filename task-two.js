import { EventEmitter } from 'node:events';
import {
  stat,
  truncate,
  copyFile,
  writeFile,
  readFile,
} from 'node:fs/promises';
class Logger extends EventEmitter {
  constructor(filename, maxSize) {
    super();
    this.filename = filename;
    this.maxSize = maxSize;
    this.logQueue = [];
    this.writing = false;
  }

  log(message) {
    this.logQueue.unshift(message);
    if (!this.writing) {
      this.writeLog();
      this.writing = true;
    }
  }

  async writeLog() {
    this.emit('messageLogged', this.logQueue[this.logQueue.length - 1]);
    try {
      const fileLog = `${await readFile(this.filename)}\n`;
      await writeFile(this.filename, `${this.logQueue.pop()}\n${fileLog}`);
    } catch (error) {
      await writeFile(this.filename, `${this.logQueue.pop()}\n`);
    }

    await this.checkFileSize();

    if (this.logQueue.length > 0) {
      await this.writeLog();
      this.writing = true;
    } else {
      this.writing = false;
    }
  }

  async checkFileSize() {
    if ((await this.getFileSize()) > this.maxSize) {
      await this.rotateLog();
    }
  }

  async getFileSize() {
    try {
      return (await stat(this.filename)).size;
    } catch (error) {
      return 0;
    }
  }

  async rotateLog() {
    try {
      await copyFile(this.filename, `${this.filename}.bak`);
      await truncate(this.filename, this.maxSize);
    } catch (error) {
      console.error(error.message);
    }
  }
}

const logger = new Logger('log.txt', 1024);

logger.on('messageLogged', message => {
  console.log('Записано сообщение:', message);
});

// logger.log('Первое сообщение1');

// logger.log('Второе сообщение2');

// logger.log('Первое сообщение3');

// logger.log('Второе сообщение4');

for (let index = 0; index <= 1200; index++) {
  logger.log(`Второе сообщение ${index}`);
}
