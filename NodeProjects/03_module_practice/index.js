const message = require('./my_module'); // require('モジュールのパス') でロードする
console.log(message); // module.exports でファイルの外部に出力された内容が利用できる


const methods = require('./methods');
const {echo, area} = require('./methods'); // モジュール内の関数名を指定して読み込み

methods.echo('foobar'); // methods モジュールの echo() を呼び出す

console.log(`area(20, 30) = ${area(20, 30)}`); // モジュール名の指定がいらない


const Lamborghini = require('./Lamborghini');

const lam = new Lamborghini('my_car');
lam.drive();


const config = require('./config');
console.log('config: %o', config);
