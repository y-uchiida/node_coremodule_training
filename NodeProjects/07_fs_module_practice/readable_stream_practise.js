const path = require('path');
const fs = require('fs');

const data = '';

// readableStream を用意する
const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf8');

// data イベント: 一部のデータが取得できた時に発火する
reader.on('data', (chunk) => {
  data += chunk; // data 変数に追加保存
});

// end イベント: すべてのデータを取得し終わったときに発火する
reader.on('end', ()=>{
  console.log(data); // 全部読み込み終わったらコンソールに表示
});

// resume: データの読み込みを開始(再開)する
reader.resume();
