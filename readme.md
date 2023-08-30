# ОСНОВЫ NODE.JS

## Buffer & Stream

***Полезные ссылки***

[Использование потоков для создания высокопроизводительных Node.js приложений](https://habr.com/ru/companies/otus/articles/654251/)<br>
[Потоки и буферы в Node.js](https://ticom-m.ru/potoki-i-bufery-v-node-js.html)<br>
[Stream ⚡️ Node.js с примерами кода](https://nodejsdev.ru/api/stream/)<br>
[Buffer (docs)](https://nodejs.org/dist/latest/docs/api/buffer.html)<br>
[Stream (docs)](https://nodejs.org/dist/latest/docs/api/stream.html)<br>

    Задание №3

Напишите функцию для обработки изображений resizeImage(inputPath, outputPath)

Функция будет принимать путь к изображению в формате JPEG и выполнять следующие операции:

Загружать изображение с указанного пути.

Изменять его размер (400px x 400px)

Сохранять преобразованное изображение на диск.

Для выполнения задачи установите плагин sharp(link), импортируйте его

sharp использует stream поэтому вы можете использовать process

Для изменения размера используйте метод resize
sharp().resize(400, 400).toFormat('jpeg')

Для практики работы с sharp дополнительно создайте вторую функцию, которая будет преобразовывать изображение в оттенки серого и применять эффект размытия
