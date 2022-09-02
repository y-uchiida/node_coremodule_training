const http = require('http');

// createServer でHTTPサーバーのインスタンスを生成する
const server = http.createServer((request, response) => {
	// リクエストを受けると、responseを返す(wriable ストリームを継承したオブジェクト)
	response.end('Hello from Node.js http server');
});

// 引数に指定したポートでHTTPサーバを起動
server.listen(3000);
