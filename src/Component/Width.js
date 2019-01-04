import React, { Component } from 'react';
import './index.css';

class Width extends Component {

componentWillMount() {
   //es6 对象的结构赋值

//    let { foo, bar} ={ foo:"aaa", bar:"bbb"};
//    console.log(foo);
//    console.log(bar); 

// let { baz } = { foo:'aaa', bar:'bbb'};
// console.log(baz);

// let {foo: baz} ={foo:'aaa', bar:'bbb'};
// console.log(baz);

// let obj = {first:'hello',last:'world'}
// let {first:f, last:l} =obj;
// console.log(f);
// console.log(l);

// let {foo:baz}={foo:'aaa', bar:'bbb'};
// console.log(baz);
//console.log(foo);

// let obj = {
//   p:[
//       'hello',
//       {y:'world'}
//   ]
// };

// let {p:[x,{y}]} =obj;
// console.log(x);
// console.log(y);

// let obj = {
//     p:[
//         'hello',
//         {y:'world'}
//     ]
// };

// let {p, p:[x,{y}]} = obj;
// console.log(x);
// console.log(y);
// console.log(p);

// const node = {
//     loc:{
//         start:{
//             line:1,
//             column:5
//         }
//     }
// }

// let {loc,loc:{start}, loc:{start:{line}} } = node;
// console.log(line);
// console.log(loc);
// console.log(start);

// let obj = {};
// let arr = [];
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

//[...set]可以转化为数组
}
  render() {
    return (
      <div className="foot">
          <h1>you are Width </h1>
      </div>
    );
  }
}

export default Width;
