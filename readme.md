# ОСНОВЫ NODE.JS

## Buffer & Stream

***Полезные ссылки***

[Использование потоков для создания высокопроизводительных Node.js приложений](https://habr.com/ru/companies/otus/articles/654251/)<br>
[Потоки и буферы в Node.js](https://ticom-m.ru/potoki-i-bufery-v-node-js.html)<br>
[Stream ⚡️ Node.js с примерами кода](https://nodejsdev.ru/api/stream/)<br>
[Buffer (docs)](https://nodejs.org/dist/latest/docs/api/buffer.html)<br>
[Stream (docs)](https://nodejs.org/dist/latest/docs/api/stream.html)<br>

    Задание №2

Напишите функцию для чтения каталога, поиска всех текстовых файлов с расширением .txt и объединения их в один файл с использованием streams.

Функция должна принимать два параметра путь до каталога и название выходного файла<br>
Создайте Writable поток для записи данных в файл<br>
Файл располагается рядом с каталогом (не внутри)<br>
Функция должна прочитать каталог и найти все файлы с расширением txt<br>
Для каждого найденного текстового файла с расширением .txt.<br>
Добавьте Readable поток и подключите его к Writeble потоку, чтобы данные последовательно записывались в выходной файл.<br>
Перед данными каждого текстового файла должно быть название этого файла в квадратных скобках

пример:<br>
3 txt файла<br>
test/test1.txt (Привет мир!)<br>
test/test2.txt (Hello world!)<br>
test/qqq.txt (Stream Ready Steady Go)<br>

Файл который будет создан<br>

        [test1]
        Привет мир!
        [test2]
        Hello world!
        [qqq]
        Stream Ready Steady Go
