# ОСНОВЫ NODE.JS

## REPL / Module / Package

***Полезные ссылки***

[команды bash](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh)<br>
[Модули CommonJS](https://nodejsdev.ru/api/modules/)<br>
[ECMAScript модули](https://nodejsdev.ru/api/esm/)<br>
[JavaScript: различие между require и import](https://www.dev-notes.ru/articles/javascript-require-vs-import/)<br>

**Задание**

Создать пакет, который возвращает функцию<br>
Импорт работает CommonJS и ESModule<br>
Эта функция<br>
на вход принимает объект такого вида<br>
----------

    {
      name: 'максим лескин'
      dateBirth: 10.03.1987,
      purpose: 'карьерный рост'
    }
возврат<br>

    {
      id: 'sdf3234gt4',  // случайны id из 10 символов 
      firstName: 'Максим', // первая буква большая, остальные строчные
      lastName: 'Лескин', // первая буква большая, остальные строчные
      dateBirth: 10.03.1987,
      age: '35', // высчитывается возраст на текущий день
      purpose: 'Карьерный рост',  // первая буква большая, остальные строчные
    }

результат выводить в консоль