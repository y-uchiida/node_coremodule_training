{
	/* console.log 出力 */
	console.log('standard log output'); // 単なる出力

	console.trace('trace output'); // 実行時のスタックも表示する

	/* フォーマット出力 */
	console.log('Object: %o', {hello: 'world'}); // %o でオブジェクトを埋め込みできる
}
