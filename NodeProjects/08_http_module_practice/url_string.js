const { URL } = require('url');

const str = 'https://develop.exampple.com:80/dirdir/subsub?query=nnnn#hash';

// URL オブジェクトで、URL文字列をかんたんに操作できる
const url = new URL(str);

console.dir(url);
console.log(`protocol: ${url.protocol}`);
console.log(`hostname: ${url.hostname}`);
