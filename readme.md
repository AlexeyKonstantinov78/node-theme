# ОСНОВЫ NODE.JS

## HTTPS / Заголовки HTTP / Переменные окружения (env)

***Полезные ссылки***

[Скачать openSSL для windows](https://wiki.openssl.org/index.php/Binaries)<br />
[https node.js (doc)](https://nodejs.org/api/https.html)<br />
[В чем разница протоколов HTTP и HTTPS](https://selectel.ru/blog/http-https/)<br />
[https node.js (rus)](https://nodejsdev.ru/api/https/)<br />


    # Генерация закрытого ключа
    openssl genpkey -algorithm RSA -out server-key.pem

    # Генерация самоподписанного сертификата
    openssl req -new -key server-key.pem -x509 -days 365 -out server-cert.pem


Получить SSL сертификат можно на [https://letsencrypt.org/ru/](https://letsencrypt.org/ru/)<br/>
Для получения сертификата letsencrypt можно использовать ботов<br/>
certbot - с подтверждением доменного имени [https://certbot.eff.org/](https://certbot.eff.org/)<br/>
ZeroSSL - с доменным именем и по ip [https://zerossl.com/](https://zerossl.com/)<br/>


[Нужен бесплатный SSL-сертификат? Легко (habr)](https://habr.com/ru/articles/667158/)<br/>


***Полезные ссылки***

[JsonPlaceholder](https://jsonplaceholder.typicode.com/)<br/>
[Список типов MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)<br/>
[Заголовки HTTP (mdn)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)<br/>
[Заголовки HTTP (wiki)](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE%D0%B2_HTTP)<br/>


    С 20 версией Node.JS библиотека dotenv не обязательна.
    Файлы .env по умолчанию поддерживаются Node.JS, остается указать env фал при запуске.

    node index --env-file .env


***Полезные ссылки***

[Переменные окружения в приложении Node.js (medium VPN)](https://medium.com/@hydrock/%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-node-js-e9ca2131e6b6)<br/>
[Использование переменных окружения в Node.js (habr)](https://habr.com/ru/companies/ruvds/articles/351254/)<br/>
