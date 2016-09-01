/*
	{
	 key:value 
	}

	key:class名字
	value：是一个布尔值
		根据布尔值是true还是false来决定这个class是否被添加
*/
function classNames(options){
	var str = '';
	for( var attr in options ){
		if( options[attr] ){
			str += " " + attr;
		}
	}

	return str.trim();	
}

function UUid() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';

	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
			.toString(16);
	}

	return uuid;
}

function store(namespace, data) {
	if (data) {
		return localStorage.setItem(namespace, JSON.stringify(data));
	}

	var store = localStorage.getItem(namespace);
	return (store && JSON.parse(store)) || [];
}