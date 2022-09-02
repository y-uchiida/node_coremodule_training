// イベント関連の動作を実装した標準クラスEventEmitter を、events モジュールから読み込みする
const EventEmitter = require('events'); 

/* EventEmmiter を継承することで、 emit や on などイベントの操作ができるようになる */
const Clock = class extends EventEmitter {
	constructor() {
		super();
		this.interval = 2000;
		this.timer = null;
	}

	/* timer を開始し、イベント tick を 指定時間ごとにemitする */
	start() {
		if (this.timer) {
			this.stop();
		}
		this.timer = global.setInterval( () => {
			this.emit('tick');
		}, this.interval);
	}

	/* timer が設定され、tickイベントが発火される状態のとき、これを停止する */
	stop () {
		if (!this.timer) {
			return ;
		}
		global.clearInterval(this.timer);
		this.timer = null;
	}
};
module.exports = Clock;
