const a = require('../module-a/index'); // ディレクトリ探索でのモジュールの読み込みは、相対パスで解決される

module.exports = () => {
	a();
	console.log('call module-b index.js');
}
