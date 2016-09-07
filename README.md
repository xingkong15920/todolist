根据react仿写的todolist事件管理系统</br>
</br>
</br>
实现过程：</br>
</br>
  1、事件回车会保存在本地localStorage，每次刷新页面不重置事件</br>
  </br>
  2、react组件之间通信是由父级传给子级一个子函数，子级调用，可以实现组件之间通信，但层级复杂不建议使用</br>
  </br>
  3、是否选中是根据事件的参数值来决定的，初始添加事件默认为false，点击选择可改变选中状态</br>
  </br>
  4、全选根据参数的数组里的选中状态值的总数来确定，循环便利</br>
  </br>
  5、删除时传入参数的id值，用filter方法过滤下，重新渲染页面即可</br>
  </br>
问题及解决方法：</br>
</br>
</br>
1、组件里写的函数与函数间要加逗号，否则会报错，无法渲染</br>
</br>
2、父子间的通信，由函数传递来实现</br>
</br>
3、组件中如使用input标签中的chencked或者其他的受阻事件，需要与onchange事件配合使用</br>
</br>
在线博客浏览地址:https://xingkong15920.github.io
