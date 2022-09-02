const Clock = require('./Clock');

const clock = new Clock();

let i = 0;

/* tick イベントのリスナーを設定
 * イベント発火ごとにカウンタを増加し、 3より大きくなったら停止させる
 */
clock.on('tick', () => {
	console.log(++i);
	if (i > 3){
		console.log('stop emitting tick event');
		clock.stop();
	}
}); 

/* tick イベントの周期的な発火を開始 */
clock.start();
