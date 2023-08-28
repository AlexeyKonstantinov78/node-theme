import { EventEmitter } from 'node:events';
import { appendFile, stat, truncate, copyFile } from 'node:fs/promises';
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

  writeLog() {
    this.logQueue.forEach(async log => {
      await appendFile(this.filename, `${log}\n`);

    });
    this.emit('messageLogged', this.logQueue);
    this.logQueue = [];
    if (this.logQueue.length > 0) {
      this.writeLog();
      this.writing = true;
    } else {
      this.writing = false;
    }

    this.checkFileSize();
  }

  async checkFileSize() {
    if ((await this.getFileSize()) > this.maxSize) {
      this.rotateLog();
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

logger.log('Первое сообщение1');

logger.log('Второе сообщение2');
