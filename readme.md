# ОСНОВЫ NODE.JS

## OS & path + npm publish

**Полезные ссылки**

[модуль os](https://nodejs.org/api/os.html)<br>
[модуль os (rus)](https://nodejsdev.ru/api/os/)<br>
[модуль path](https://nodejs.org/api/path.html)<br>
[модуль path (rus)](https://nodejsdev.ru/api/path/)<br>
[модуль path примеры](https://nodejsdev.ru/guides/webdraftt/path/)<br>

[npm](https://www.npmjs.com/)<br>
[Статья "Публицация проекта в npm"](https://habr.com/ru/sandbox/173744/)<br>
[Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)<br>

## Задание

    Задание To-Do CLI

To-Do CLI<br>
Расширьте ваше CLI-приложение для управления задачами (To-Do List) который писали ранее.<br>
Добавьте возможность сохранения задач в папке пользователя(homedir)<br>

    Задание Find and Replace

### Программа поиска и замены текста в файлах

Необходимо создать полезную утилиту, которая будет искать и заменять указанную строку в текстовых файлах в директории.
Это CLI программа, которая будет пошагово опрашивать пользователя.

Пользователь должен будет задать:
1. Путь к директории
2. Строка поиска
3. Строка замены

После программа ищет все текстовые файлы (txt) в папке и заменяет все вхождения заданной строки в текстовых файлах в этой директории.

пример опроса

![](data:image/png;base64,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)
