// app下面的方法用来处理数据
var app = {
	data:data,
	//添加数据
	addItem:function (title){

		app.data.push({
			id:UUid(),
			title:title,
			isChecked:false
		});
		//重新渲染页面
		app.render();
		//把数据渲染到本地存储
		store("miaov",app.data);
	},
	//单选框函数，根据传入的id值，循环便利下所有的数据的id，如果两id一样，则单选框状态取反，重新渲染页面
	toggleChecked:function (id){
		
		app.data.forEach(function (item){
			if( item.id == id ){
				item.isChecked = !item.isChecked;
			}
		});
		app.render();
		store("miaov",app.data);
	},
	//根据传入的id值循环便利，用filter筛除数据，如果传入id与遍历id不一样，则返回，完成之后重新渲染页面，并且把数据存储到本地
	deleteItem:function (id){
		app.data = app.data.filter(function (item){
			return item.id != id;
		});

		app.render();
		store("miaov",app.data);
	},
	//根据传入的boolen值，来遍历data所有数据，并且把数据里所有的isChecked变为传入的布尔值，重新渲染页面，数据存储本地
	toggleAll:function (checked){
		console.log(checked);
		app.data.forEach(function (item){
			item.isChecked = checked;
		});

		app.render();
		store("miaov",app.data);

	}
}

//加载页面时，从本地取一次数据
app.data = store("miaov");