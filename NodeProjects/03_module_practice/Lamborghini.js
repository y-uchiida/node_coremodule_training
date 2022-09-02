/* モジュール化したクラスを読み込んで子クラスを定義し、さらにモジュールとしてエクスポートする */

const Car = require("./Car");

const Lamborghini = class extends Car {
  constructor(name) {
    super(name); // 親クラスのコンストラクタは super で呼び出しできる
  }

  echo() {
    super.drive();
  }

  drive() {
    // メソッドのオーバーライド
    console.log(`fire ${this.name}`);
  }
};

module.exports = Lamborghini;
