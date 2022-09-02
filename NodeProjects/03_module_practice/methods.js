/* 関数のモジュール化 */

const echo = message => console.log(message);

const area = (width, height) => width * height ;

/* 作成した関数をオブジェクトに詰めてexports */
module.exports = {
	echo,
	area
}
