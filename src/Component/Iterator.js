import React, { Component } from 'react';

class IteratorComponent extends Component {
    componentWillMount() {
    //iterator(遍历器)的概念
    //遍历器（Iterator）就是这样一种机制。
    //它是一种接口，为各种不同的数据结构提供统一的访问机制。
    //任何数据结构只要部署 Iterator 接口，
    //就可以完成遍历操作（即依次处理该数据结构的所有成员）。

    //Iterator 的作用有三个：
    //一是为各种数据结构，提供一个统一的、简便的访问接口；
    // 二是使得数据结构的成员能够按某种次序排列；
    // 三是 ES6 创造了一种新的遍历命令for...of循环，
    // Iterator 接口主要供for...of消费。

    //Iterator 的遍历过程是这样的。

   //（1）创建一个指针对象，指向当前数据结构的起始位置。
   //也就是说，遍历器对象本质上，就是一个指针对象。

  //（2）第一次调用指针对象的next方法，
  //可以将指针指向数据结构的第一个成员。

 //（3）第二次调用指针对象的next方法，
 //指针就指向数据结构的第二个成员。

//（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

//每一次调用next方法，都会返回数据结构的当前成员的信息。
//具体来说，就是返回一个包含value和done两个属性的对象。
//其中，value属性是当前成员的值，done属性是一个布尔值，
//表示遍历是否结束。

//下面是一个模拟next方法返回值的例子。

//Iterator 接口的目的，就是为所有数据结构，
//提供了一种统一的访问机制，即for...of循环（详见下文）。
//当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 
//Iterator 接口。

//原生具备 Iterator 接口的数据结构如下。

//Array
//Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象

//iterator接口的使用场合
//解构赋值
// let set = new Set().add('a').add('b').add('c');
// let [x,y]=set;
// console.log(x);
// console.log(y);
// let [first,...rest]=set;
// console.log(first);
// console.log(rest)

// let generator = function* () {
//     yield 1;
//     yield* [2,3,4];
//     yield 5;
//   };
  
//   var iterator = generator();
  
//   console.log(iterator.next() )// { value: 1, done: false }
//   console.log( iterator.next() )// { value: 2, done: false }
//   console.log(iterator.next() )// { value: 3, done: false }
//   console.log(iterator.next() )// { value: 4, done: false }
//   console.log(iterator.next() )// { value: 5, done: false }
//   console.log(iterator.next() )// { value: undefined, done: true }

//（4）其他场合

//由于数组的遍历会调用遍历器接口，
//所以任何接受数组作为参数的场合，
//其实都调用了遍历器接口。下面是一些例子。

// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
// Promise.all()
// Promise.race()

//for...of 循环
//ES6 借鉴 C++、Java、C# 和 Python 语言，引入了for...of循环，
//作为遍历所有数据结构的统一的方法。

//一个数据结构只要部署了Symbol.iterator属性，
//就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
//也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

//for...of循环可以使用的范围包括数组、Set 和 Map 结构、
//某些类似数组的对象（比如arguments对象、DOM NodeList 对象）
//后文的 Generator 对象，以及字符串。

























    }
    render() {
        return (
            <div className="foot">
                <h1>you are IteratorComponent</h1>
            </div>
        );
    }
}

export default IteratorComponent;
