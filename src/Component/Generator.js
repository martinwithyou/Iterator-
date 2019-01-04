import React, { Component } from 'react';
import { fstat } from 'fs';

class GeneratorComponent extends Component {
  componentWillMount() {
    //Generator 函数是 ES6 提供的一种异步编程解决方案，
    //语法行为与传统函数完全不同。
    //本章详细介绍 Generator 函数的语法和 API，
    //它的异步编程应用请看《Generator 函数的异步应用》一章
    
    //形式上，Generator 函数是一个普通函数，
    //但是有两个特征。
    //一是，function关键字与函数名之间有一个星号；
    //二是，函数体内部使用yield表达式，
    //定义不同的内部状态（yield在英语里的意思就是“产出”）。

    // function* helloWorldGenerator(){
    //   yield 'hello';
    //   yield 'world';
    //   return 'ending';
    // }
    // var hw = helloWorldGenerator();
    // console.log(hw);
    // console.log(hw.next());
    // console.log(hw.next());
    // console.log(hw.next());
    // console.log(hw.next());

    //由于 Generator 函数仍然是普通函数，
    //所以一般的写法是上面的第三种，
    //即星号紧跟在function关键字后面。
    //本书也采用这种写法

    // function* gen(){
    //     yield 123+456;
    // }
    // console.log(gen().next())
    // function* f() {
    //     console.log('执行了！')
    //   }
      
    //   var generator = f();
      
    //   setTimeout(function () {
    //     generator.next()
    //   }, 2000);

// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   a.forEach(function (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   });
// };

// for (var f of flat(arr)){
//   console.log(f);
// }




// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// for (var f of flat(arr)) {
//   console.log(f);
// }

// function* demo() {
//     foo(yield 'a', yield 'b'); // OK
//     let input = yield; // OK
// }

//generator函数的异步应用
//异步编程对于javascript语言太重要，
//因为其执行的环境是“单线程”，
//如果没有异步编程，根本没法用
//本章主要介绍generator如何完成异步操作

//es6诞生之前，异步编程
//回调函数
//事件监听
//发布/订阅
//promise对象

//generator 函数将 javascript异步编程带入一个全新阶段
//
// fs.readFile('/etc/passwd','utf-8',function(err,data){
//    if(err) throw err;
//    console.log(data);
// });

//promise
// fs.readFile(fileA,'utf-8',function(err,data){
//    fs.readFile(fileB, 'utf-8', function(err,data){
//        //...
//    })
// })

//promise对象就是为了解决这个问题而提出的
//它不是新的语法功能
//而是一种新的写法
//将允许回调函数嵌套
//改为链式调用
//采用promise,连续读取多个文件

// var readFile = require('fs-readfile-promise')

// readFile(fileA)
// .then(function(data){
//     console.log(data.toString())
// })
// .then(function(){
//     return readFile(fileB);
// })
// .then(function(data){
//     console.log(data.toString())
// })
// .catch(function(err){
//     console.log(err);
// });


//generator函数
//协程
// funtion* asyncJob(){
//    var f = yield readFile(fileA)
// }

//上面代码的函数asyncJob是一个协程，
//它的奥妙就在其中的yield命令。
//它表示执行到此处，执行权将交给其他协程。
//也就是说，yield命令是异步两个阶段的分界线。

//协程遇到yield命令就暂停，等到执行权返回，
//再从暂停的地方继续往后执行。
//它的最大优点，就是代码的写法非常像同步操作，
//如果去除yield命令，简直一模一样。

// function* gen(x){
//     var y = yield +2;
//     return y;
// }

// var g =gen(1);
// console.log( g.next() );
// console.log( g.next() );

// function* gen(x){
//     var y = yield x + 2;
//     return y;
// }
  
// var g = gen(1);
// console.log (  g.next())  // { value: 3, done: false }
// console.log( g.next(2) )// { value: 2, done: true }






}
render() {
    return (
      <div className="foot">
          <h1>you are GeneratorComponent </h1>
      </div>
    );
}
}

export default GeneratorComponent;
