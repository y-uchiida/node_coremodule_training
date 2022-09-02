const http = require('http');
const fs = require('fs');
const path = require('path');

// createServer でHTTPサーバーのインスタンスを生成する
const server = http.createServer((request, response) => {
	// resuest にリクエスト時の情報が入っている
	console.log(`【${(new Date()).toISOString()}】 ${request.method} ${request.url} ${request.headers["user-agent"]}`);

	/* リクエストのメソッドによって動作を分ける */
	if (request.method === 'POST'){
		// post メソッドでのリクエストは、リクエストボディを返す
		request.pipe(response);
	} else {
		// sample.txt の読み込みストリームを生成する
		const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');
		// response にパイプして、読み込んだファイルの内容をサーバーのresponse へ送り込む
		reader.pipe(response);
	}

});

// 引数に指定したポートでHTTPサーバを起動
server.listen(3000);
