const http = require("http");
const data = "Hello World !";
const url = "http://localhost:3000/";

// サーバーに送信するメソッドとヘッダ情報をオブジェクトとして保持
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(data)
  }
};

// http.request() メソッドで、リクエストを送信する
// 送信完了したら、第3引数の関数をコールバックとして実行する
const request = http.request(url, options, (response) => {
  response.pipe(process.stdout);
});

// エラー発生時
request.on("error", (err) => {
  console.log(err.message);
});

// サーバーに送信を実行
request.end();
