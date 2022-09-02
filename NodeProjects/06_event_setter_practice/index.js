// イベント関連の動作を実装した標準クラスEventEmitter を、events モジュールから読み込みする
const EventEmitter = require('events'); 

/* --- on を使って1回だけ実行されるイベントリスナーを作る --- */

const ee = new EventEmitter();

const onTick = function (){
	console.log('onTick() called');

	// 'event' イベントのリスナーから、 onTick を取り除く
	ee.off('event', onTick);
};

ee.on('event', onTick); // 'event'の発火で、 onTick を実行するようにリスナーとして設定

ee.emit('event');
ee.emit('event'); // 初回の実行で onTick がリスナーから削除されているので、2回目は何も起こらない


/* --- once で上記と同じ動作を作る --- */

const onTickOnce = function (){
	console.log('onTickOnece() called');
}

ee.once('event', onTickOnce); // once() メソッドで、1回だけのリスナーとして設定

ee.emit('event');
ee.emit('event'); // ontickOnce は1回目の発火でリスナーから外される


/* --- function キーワードでの関数宣言と arrow 関数のthisの違い --- */

ee.once('event', function(){
	console.log('function: \r\n', this); // EventEmitter オブジェクト
});

ee.once('event', () => {
	console.log('arrow: \r\n', this); // {} (Object)
});

ee.emit('event');


/* --- イベントリスナーの実行順を確認する --- */

ee.once('event', ()=> { console.log('1st'); });
ee.once('event', ()=> { console.log('2nd'); });
ee.once('event', ()=> { console.log('3rd'); });

ee.emit('event');
