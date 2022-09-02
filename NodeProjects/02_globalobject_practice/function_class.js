/* 関数を用いたクラス宣言と継承 */

const util = require('util'); // コアモジュール util を読み込み、クラス継承を行えるようにする

/* 親クラスの宣言 */
const Car = function (name){
	this.name = name;
}
Car.prototype.drive = function (){ // 関数クラスのメソッド追加は、prototype に向けて行う
	console.log('zoom zoom...');
}

/* 子クラスの宣言 */
const Lamborghini = function (name) {
	Lamborghini.super_.call(this, name); // super_.call で親クラスを呼び出し
};
util.inherits(Lamborghini, Car) // util.inherits(子クラス, 親クラス) で継承を行う(非推奨)

Lamborghini.prototype.echo = function () { // 親クラスのedhoにつなげる
	Lamborghini.super_.prototype.drive.call(this);
}

Lamborghini.prototype.drive = function () {
	console.log(`fire ${this.name}`);
}

const car = new Lamborghini('lamlam');
car.echo();
car.drive();
