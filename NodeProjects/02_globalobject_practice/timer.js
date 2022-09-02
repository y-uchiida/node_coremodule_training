{
	/* 処理時間計測 */

	console.time('timer1'); // ラベル timer1 の計測開始

	let sum = 0;
	for (let i = 1; i <= 1000; i++) {
		sum += i;
	}

	console.timeEnd('timer1'); // ラベル timer1 の計測終了　開始したラベルと同じ文字列を指定する
}
