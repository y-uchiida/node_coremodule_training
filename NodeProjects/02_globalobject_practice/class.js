/* class キーワードを用いらクラスの宣言と継承 */

/* 親クラスの宣言 */
const Car = class {
  constructor(name) {
    this.name = name;
  }

	drive() {
		console.log('zoom zoom...');
	}
};

/* 子クラスの宣言 */
const Lamborghini = class extends Car { // extends でクラス継承
	constructor(name) {
		super(name); // 親クラスのコンストラクタは super で呼び出しできる
	}

	echo() {
		super.drive();
	}

	drive() { // メソッドのオーバーライド
		console.log(`fire ${this.name}`);
	}
}

const car = new Lamborghini('lamlam');

car.echo();

car.drive();
