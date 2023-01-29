---

date: 2023-01-24 17:03


sidebar: heading
---

# vue基础

## 创建

1. 想让vue工作，就必须创建一个vue实例，并且要传入一个配置对象
2. root容器内代码依然符合HTML规范，只不过混入一些vue的语法
3. root容器内的代码叫做vue模板
4. 一个容器对应一个vue实例，不能出现多对多，一对多等
5. 在真实开发中只有一个vue实例，并且配合着组件一起使用
6. {{xxx}}要写成js表达式，xxx可以自动读取data中的所有属性
7. 一旦data数据发生改变，模板中用到的数据也会发生改变  

注意区分：

1. 一个容器对应一个vue实例，不能出现多对多，一对多等  
2. js表达式和js代码  
表达式：一个表达式会生成一个值，放在任何一个需要值的地方。  
比如

```js
a,
a+b,
a(),
x===y?'a':"b"
js代码语句：if

```

## 模板语法

1. 插值语法
功能：用于解析标签体内容
写法：`{{xxx}}`,xxx是指js表达式，可以直接读取data中的所有属性
2. 指令语法
功能：用于解析标签，包括标签属性，标签体内容，绑定事件等等
举例：`v-bind:href="xxx"`  
简写 `:href="xxx"`,xxx是指js表达式，同杨可以读取data中所有属性  
备注：vue有很多v-开头的指令，v-bind只是举例

## 数据绑定

1. 单向绑定v-bind,数据只能从data流向页面
2. 双向绑定v-model，数据和data是双向的  
只用于表单元素  
3. 备注：双向绑定只能用于表单元素

## el和data

1. el有两种写法
    1. new vue时候直接配置el属性
    2. 先创建vue实例，然后使用v.$mount('#root')
2. data有两种写法
    1. 对象式
    2. 函数式  
    如何选择：现阶段哪种都可，**使用组件必须用函数式**  
    注意事项：函数式一定要用一般函数，不要用箭头函数

## 数据模型

### Object.defineProperty

作用：js用于直接在对象上定义一个属性，或者修改一个属性，并且返回该对象  
格式：`Object.defineProperty(对象，属性名字符串,{一些属性或方法})`,最常见的如下

常见属性  
`value:18`,  // 设置属性的值  
`enumerable:true`, //控制属性是否可以枚举，默认是否  
`Writable:true`,//控制属性是否能被修改，默认是否  
`configurable:true`,//控制属性是否可以被删除，默认是否

常见方法※  
`get和set方法`  
作用：当对象内的属性调用的时候会调用，get表示读取调用，set表示赋值调用  
写法  

```js
get:function(){
                    console.log('有人读取age');
                    return number;
},
或简写
get(){}
```

### 数据代理

是什么？
数据代理是通过一个对象来操作另一个对象中属性的操作 读或写  
例如

```js
let obj = {x:100};
let obj2 = {y:200};
Object.defineProperty(obj2,"x",{
    // 数据代理obj1中的属性
    get(){
        return obj.x
    },
    set(value){
        obj.x = value
    }
})
```

## vue数据代理

基本原理  
通过object.defineProperty()把data中的属性添加到vm上
为每一个添加到vm上的属性，添加getter和setter方法
在getter和setter内部去操作data中对应的属性

## MVVM模型



## 事件处理

### 基本使用

1. 使用`v-on:xx`或者`@xx `绑定事件，其中xxx是事件名
2. 事件的回调需要配置在methods对象中，最终会在vm上
3. methods中的函数不要写成箭头函数，否则this就不是vm了
4. methods中配置的一般函数都是被vue管理的函数，this指向vm或者组件实例
5. `@click="demo"` 等同于`@click='demo($event)'`,后者可以传参  
例如  
使用时`event.target.value`指定事件发生所指向的对象进行赋值

### 事件修饰符

1-3常用  
写法  
`@click.修饰符`  

事件修饰符如下

1. prevent 阻止默认事件  
   例如在超链接标签增加点击事件，点击后执行对应方法，而不会去跳转链接
2. stop 阻止事件冒泡
3. once 事件只触发一次
4. capture 使用事件捕获模式
5. self 只有event.target是当前操作元素才触发事件
6. passive 事件默认行为立刻执行，无需等待事件回调执行完毕 

### 键盘事件

使用方法  
`v-on:keyup/down.案件名`

1. vue中常见的按键别名
   - 回车 enter
   - 删除或退格 delete
   - 退出 esc
   - 空格 space
   - 换行 tab 必须配合keydown使用
   - 上 up
   - 下 down
   - 左 left
   - 右 right
  
2. vue未提供别名的按键，可以用按键原始的key值绑定，但注意要转换为kebab-case端横线命名  
如`@keyup.caps-lock='showInfo'`

3. 系统修饰键 ctrl alt shift meta徽标键
   1. 配合keyup用，按下按键同时，必须再按下其他键，随后释放其他键，事件才能触发
   2. 配合keydown使用，正常触发按键  

4. 也可以使用keycode去指定具体按键，不推荐
5. Vue.config.keyCode.自定义键名 = 键码，可以去定制按键别名

