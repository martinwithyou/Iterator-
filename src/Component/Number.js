import React, { Component } from 'react';

class NumberComponent extends Component {
  componentWillMount() {
  
  //数值的拓展

  //二进制和8进制的表示法
//   console.log(0b111110111 === 503);
//   console.log(0o767 === 503 );

//   console.log(Number('0b111') ) // 7
//   console.log( Number('0o10') )

//   Number.isFinite(), Number.isNaN()
// console.log( Number.isFinite(15) ); // true
// Number.isFinite(0.8); // true
// Number.isFinite(NaN); // false
// console.log( Number.isFinite(Infinity) ); // false
// Number.isFinite(-Infinity); // false
// Number.isFinite('foo'); // false
// Number.isFinite('15'); // false
// Number.isFinite(true); // false

// console.log( Number.isNaN(NaN)) // true
// console.log( Number.isNaN(15) )// false
// Number.isNaN('15') // false
// Number.isNaN(true) // false
// Number.isNaN(9/NaN) // true
// Number.isNaN('true' / 0) // true
// Number.isNaN('true' / 'true') // true

//Number.parseInt()
//Number.parseFloat()
//console.log(Number.parseInt('12.34') );
//console.log( Number.parseFloat('123.45#'));

//Number.isInteger()
//判断是否为整数
//console.log(Number.isInteger(25)) // true
//console.log(Number.isInteger(25.1) )// false
//Number.isInteger(5E-324) // false
//Number.isInteger(5E-325) // true
//console.log(Number.isInteger(5E-324));
//console.log(Number.isInteger(5E-325))

//console.log(Number.EPSILON)
// 0.1 + 0.2
// // 0.30000000000000004

// 0.1 + 0.2 - 0.3
// // 5.551115123125783e-17

// 5.551115123125783e-17.toFixed(20)

// function withinErrorMargin (left, right) {
//     return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
// }
  
//   0.1 + 0.2 === 0.3 // false
//   withinErrorMargin(0.1 + 0.2, 0.3) // true
  
//   1.1 + 1.3 === 2.4 // false
//   withinErrorMargin(1.1 + 1.3, 2.4) // true

//Number.isSafeInteger()
//console.log( Math.pow(2, 53) );
//console.log( Math.pow(2, 53) === Math.pow(2, 53) + 1 );

//安全整数

// console.log( Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1 )
// // true
// console.log( Number.MAX_SAFE_INTEGER === 9007199254740991 )
// // true

// console.log( Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER )
// // true
// console.log( Number.MIN_SAFE_INTEGER === -9007199254740991 )
// // true
// Number.isSafeInteger('a') // false
// Number.isSafeInteger(null) // false
// Number.isSafeInteger(NaN) // false
// Number.isSafeInteger(Infinity) // false
// Number.isSafeInteger(-Infinity) // false

// Number.isSafeInteger(3) // true
// Number.isSafeInteger(1.2) // false
// Number.isSafeInteger(9007199254740990) // true
// Number.isSafeInteger(9007199254740992) // false

// Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
// Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false




//Math对象的扩展
// console.log(Math.trunc(4.1));
// let a = Math.trunc(-4.9);
// console.log(a);
// console.log( Math.trunc('123.456') )// 123
// console.log( Math.trunc(true) )//1
// console.log( Math.trunc(false) )// 0
// console.log( Math.trunc(null) )// 0

//Math.sign()
//Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
//console.log( Math.sign(-5) );
//console.log( Math.sign(5) );

//Math.cbrt()
//Math.cbrt方法用于计算一个数的立方根。
//console.log( Math.cbrt(27) );


//Math.clz32(1000)
//JavaScript 的整数使用 32 位二进制形式表示
//console.log(Math.clz32(14444444444000))
//Math.imul()
//Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
//console.log( Math.imul(2, 4) );
//Math.hypot() 
//Math.hypot方法返回所有参数的平方和的平方根
//Math.fround() 
//Math.fround方法返回一个数的32位单精度浮点数形式

//对数方法
//Math.expm1()
//Math.log1p()
//Math.log10()
//Math.log2()

//三角函数
// Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
// Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
// Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
// Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
// Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
// Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

//指数运算符
//ES2016 新增了一个指数运算符（**）
// console.log( 2 ** 3 ** 2 );
// let b = 4;
// b **= 3;
// console.log(b);

//console.log(Math.sinh(90));
}
render() {
    return (
      <div className="foot">
          <h1>you are NumberComponent </h1>
      </div>
    );
}
}

export default NumberComponent;
