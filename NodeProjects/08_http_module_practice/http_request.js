const http = require('http');

// createServer でHTTPサーバーのインスタンスを生成する
const server = http.createServer((request, response) => {
	// resuest にリクエスト時の情報が入っている
	console.log(`【${(new Date()).toISOString()}】 ${request.method} ${request.url} ${request.headers["user-agent"]}`);

	response.end('Hello from Node.js http server');
});

// 引数に指定したポートでHTTPサーバを起動
server.listen(3000);
