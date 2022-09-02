const a = require('./lib/module-a/index');
// const a = require('./lib/module-a/index.js'); // .js の拡張子の有無にかかわらず読み込みされる
a();

const b = require('./lib/module-b/index'); // module-b は内部でmodule-aを読み込んでいるが、aの初期化(実行)は1度のみ
b();
