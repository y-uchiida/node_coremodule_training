{ /* 01. 遅延実行 */

	/* 現在のディレクトリを表示 */
	console.log('current directory: ' + __dirname);

	/* 実行しているプログラムのファイルパス */
	console.log('program name: ' + __filename);

	/* setTimeout() による遅延実行 */
	setTimeout(()=> { 
		console.log('*** 100ms wait ***');
	}, 100);

	/* 先に記述されている *** 100ms wait *** より先にglobal が表示される */
	console.log('global');

	/* 3000ms(3秒間)処理が止まる実装 */
	const end = (new Date()).getTime() + 3000;
	while (new Date().getTime() < end) { /* waiting... */ }
}
