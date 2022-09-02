const path = require('path');
const fs = require('fs');

// 書き込み用ストリームを生成し、内容を書き込む
const writer = fs.createWriteStream(path.join(__dirname, 'created.txt'), 'utf8');
writer.end('Hello World !');

// 書き込み用ストリームと読み込み用ストリームを生成する
const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');
const writer2 = fs.createWriteStream(path.join(__dirname, 'sample-copy.txt'), 'utf8');

// pipe() で、読み書きのストリームをつなげ、読み込んだ内容を書き込みストリームへ送り込む
reader.pipe(writer2);
reader.resume();
