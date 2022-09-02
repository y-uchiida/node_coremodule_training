const path = require("path"); // path モジュールを読み込み
const fs = require("fs"); // filesystem モジュールを読み込み

// 同一階層にある sample.txt を読み込み(ブロッキング)
const data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

// 読み込んだ内容をコンソールに表示
console.log(data);

// sample-copy.txt に内容を複製(書き込み)(ブロッキング)
fs.writeFileSync(path.join(__dirname, "sample-copy.txt"), data, "utf8");
