{
	/* 実行中プロセスの情報取得と操作 */

	console.log('process.env: ', JSON.stringify(process.env, null, 2)); // 環境変数の表示
	console.log(' ');

	console.log('///// process.argv /////');
	process.argv.forEach( (arg) => { console.log(arg) } ); // 実行時引数の表示
	console.log(' ');

	console.log('///// process.cwd /////');
	console.log(`cwd(): ${process.cwd()}\n`); // 実行時のカレントディレクトリなので、必ずしも実行しているプログラムのパスと一致しない

	console.log('///// __dirname /////');
	console.log(`__dirname: ${__dirname}\n`);

	console.log('///// process.platform /////');
	console.log(`process.platform: ${process.platform}\n`);

}
