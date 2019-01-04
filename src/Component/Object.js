import React, { Component } from 'react';

class ObjectComponent extends Component {

componentWillMount() {

//    const foo = 'bar';
//    const baz = {foo};
//    console.log( baz );
//    const baz = {foo:foo}

// function getPoint(){
//     const x = 1;
//     const y = 10;
//     return {x,y}
// }
// console.log( getPoint() );

//属性的遍历

// ES6 一共有 5 种方法可以遍历对象的属性。

// （1）for...in

// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

// （2）Object.keys(obj)

// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

// （3）Object.getOwnPropertyNames(obj)

// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

// （4）Object.getOwnPropertySymbols(obj)

// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// （5）Reflect.ownKeys(obj)

// Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举

// console.log( Object.is('foo','foo'));
// Object.is({}, {});
// console.log(+0 === -0 )//true
// console.log(NaN === NaN) // false

// let target = {a:1};
// const source1 = {b:2};
// const source2 = {c:3};
// target = Object.assign(target,source1,source2);
// console.log(target);

//Object.assign方法实现地是浅拷贝
// const obj1 = {a: {b:1}}
// const obj2 = Object.assign({},obj1);
// obj1.a.b = 2;
// console.log(obj2.a.b)
//同名属性的替换
//const target = {a:{b:'c',d:"e"}}
//const source = {a:{b:'hello'}}
//let a = Object.assign(target,source);
//console.log(a);
//处理数组，会把数组视为对象
//let a = Object.assign([1,2,3],[4,5]);
//console.log(a);

//Object.assign的方法
//1，为对象添加属性
//2，为对象添加方法
//3，克隆对象
//4，合并多个对象
//5，为属性指定默认值

//Object.getOwnPropertyDescriptors()
// const obj = {
//     foo: 123,
//     get bar() { return 'abc' }
// };
  
//  console.log( Object.getOwnPropertyDescriptors(obj) );

}

render() {
    return (
      <div className="foot">
          <h1>you are ObjectComponent</h1>
      </div>
    );
}
}

export default ObjectComponent;
