/* クラスをモジュールとして定義する */

const Car = class {
  constructor(name) {
    this.name = name;
  }

	drive() {
		console.log('zoom zoom...');
	}
};

module.exports = Car;
