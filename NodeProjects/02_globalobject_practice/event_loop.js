{
  /* イベントループ */

	setTimeout(() => {
    console.log("setTimeout() 100ms");
  }, 100);

	setTimeout(() => {
    console.log("setTimeout() 0ms");
  }, 0);


	setImmediate(() => {
    console.log("setImmediate()");
  });

	
	process.nextTick(() => {
		console.log('nextTick()');
	});

	Promise.resolve().then(() => {
		console.log('Promise.resolve().then()');
	});

}

/*
	実行結果
	nextTick()
	Promise.resolve().then()
	setTimeout() 0ms
	setImmediate()
	setTimeout() 100ms
*/
