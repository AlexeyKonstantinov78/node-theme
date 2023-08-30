const textToBuffer = (text, encoding) => (Buffer.from(text)).toString(encoding);

const bufferToText = (buffer, encoding) => buffer.toString(encoding);

const endcoding = 'utf-8';
const encoding64 = 'base64';

const text = 'Привет мир!';

const utfBuffer = textToBuffer(text, endcoding);
console.log(utfBuffer);

const decodedText = bufferToText(utfBuffer, endcoding);
console.log(decodedText);

console.log(bufferToText(textToBuffer(text, endcoding), encoding64));
