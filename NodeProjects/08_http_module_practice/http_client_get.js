const http = require("http");
const url = "http://localhost:3000/";

// 送信するリクエストの内容をオブジェクトで設定
const options = {
  method: "GET"
};

// http.request() で、HTTPリクエストを送信できる
// レスポンスを受け取ったら、第3引数で指定した関数がコールバック実行される
const req = http.request(url, options, (res) => {

  res.pipe(process.stdout); // stdout は標準出力のストリーム
});

// req.end() でリクエスト情報の送信完了を通知
req.end();
