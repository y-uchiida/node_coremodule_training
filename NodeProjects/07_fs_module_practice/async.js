const path = require("path");
const fs = require("fs");

// 同一階層にある sample.txt を非同期関数でファイルを読み込み、
// 成功したらコールバック関数が実行される
// 内容をすべてメモリ上にロードする仕組みなので、巨大ファイルを扱うとメモリ枯渇の危険がある
fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  // 読み込んだ内容をコンソールに表示
  console.log(data);

  // sample-copy.txt に内容を複製(書き込み)
  fs.writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8", (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("OK");
  });
});
