import React, { Component } from 'react';

class FunctionComponent extends Component {
  componentWillMount() {
   
    //函数的扩展

    // function log(x,y){
    //     y = y || 'world';
    //     console.log(x,y);
    // }

    // log('hello');
    // log("hello", 'china');
    // log('hello', '')

    //ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
    // function log(x, y = 'world'){
    //     console.log(x,y);
    // }
    // log('hello')
    // log('hello','china')
    // log('hello','')

//     function Point(x=0,y=0){
//         this.x=x;
//         this.y=y;
//     }
//    const p = new Point();
//    console.log(p)

//与解构赋值默认值结合使用
// function foo({x,y=5}){
//     console.log(x,y)
// }
// foo({});
// foo({x:1});
// foo({x:1,y:8})

// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
// }
// fetch('http://example.com', {})
// "GET"
//fetch('http://example.com')

//参数默认值的位置 
// function f(x=1,y){
//     console.log([x,y]);
// }
// f();
// f(2);
// //f(,1)
// f(undefined,1);

// function f(x,y=5,z){
//     console.log( [x,y,z]);
// }
// f();
// f(1) // [1, 5, undefined]
// //f(1, ,2) // 报错
// f(1, undefined, 2) 

//函数的 length 属性
//指定了默认值以后，
//函数的length属性，
//将返回没有指定默认值的参数个数。
//也就是说，指定了默认值后，length属性将失真。
//(function (a) {}).length // 1
//(function (a = 5) {}).length // 0
//(function (a, b, c = 5) {}).length // 2

// var x=1;
// function f(x,y=x){
//     console.log(y);
// }
// f(2);

// let x = 1;
// function f(y = x) {
//   let x = 2;
//   console.log(y);
// }
// f()

// function f(y = x) {
//     let x = 2;
//     console.log(y);
// }
  
// f()

//rest参数
// function add(...values){
//     let sum =0;
//     for(var val of values){
//         sum += val
//     }
//     return sum
// }
// console.log( add(5,6,7) )


//函数内部可以设置严格模式
// function doSomething(a,b){
//     'use strict'
// }
//ES2016 做了一点修改，
//规定只要函数参数使用了默认值、
//解构赋值、
//或者扩展运算符，
//那么函数内部就不能显式设定为严格模式，否则会报错。

//函数的name属性
// function foo(){}
// console.log(foo.name)
// const bar = function baz() {};
// // ES6
// console.log(bar.name) // "baz"

//箭头函数
// var f = v=>v;
// var f = function(v){
//     return v;
// }
// var f = () => 5;
// var f = function(){ return 5}

// var sum = (num1, num2) => num1 +num2;
// var sun =function(num1, num2){
//     return num1+num2
// }

//let getTempItem = id => ({id:id,name:"temp"});
// const full = ({first,last})=> first + ' '+ last;
// console.log( full({first:"dezhu",last:'withyou'}));
// const isEven = n => n%2 === 0;
// const square = n => n*n;
// let a =[1,2,3].map(x=>x*x);
// console.log(a);
// var resoult =  (a,b)=> a-b;
// console.log( resoult(9,7));

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的

// function foo(){
//     setTimeout(()=>{
//         console.log(id)
//     },100)
// }
// var id =21;
// foo.call({id:42})
//上面代码中，箭头函数没有自己的this，
//所以bind方法无效，内部的this指向外部的this。

//长期以来，JavaScript 语言的this对象一直是一个令人头痛的问题
//，在对象方法中使用this，必须非常小心。
//箭头函数”绑定”this，很大程度上解决了这个困扰。

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;

// let a = mult2(plus1(5));
// console.log(a);

//双冒号运算符 § ⇧
//箭头函数可以绑定this对象，
//大大减少了显式绑定this对象的写法（call、apply、bind

//尾调用优化
//尾调用（Tail Call）是函数式编程的一个重要概念，
//本身非常简单，一句话就能说清楚，
//就是指某个函数的最后一步是调用另一个函数。












}
render() {
    return (
      <div className="foot">
          <h1>you are FunctionComponent </h1>
      </div>
    );
}
}

export default FunctionComponent;
