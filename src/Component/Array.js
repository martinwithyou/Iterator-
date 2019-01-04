import React, { Component } from 'react';

class ArrayComponent extends Component {
    componentWillMount() {
  
    //数组的拓展
    
    //拓展运算符
    // console.log(...[1,2,3]);
    // console.log(1, ...[2,3,4], 5);
    // function add(x, y) {
    //     return x + y;
    // }
      
    // const numbers = [38,88,99,77,66,55,33];
    // console.log(add(...numbers) )// 42


    //替代函数apply方法
    // function f(x,y,z){
    //    return x+y+z
    // }
    // let arg = [0,1,2];
    // console.log( f(...arg) );

    //console.log( Math.max(...[14,3,77]) );

    // ES6 的写法
    // let arr1 = [0, 1, 2];
    // let arr2 = [3, 4, 5];
    // console.log( arr1.push(...arr2) );

    //复制数组

    // const a1 = [1,2];
    // const a2 =a1;
    // a2[0]=10000;
    // console.log(a2);

    // const a1 = [1,2];
    // const a2 = a1.concat();
    // a2[0]=10000;
    // console.log(a1)

    // const a1 = [1,2];
    // const a2 = [...a1];
    // a2[0]=1000;
    // console.log(a1)


    //合并数组
    // const arr1 =['a','b'];
    // const arr2 =['c'];
    // const arr3 =['d', 'e'];
    // console.log(  arr1.concat(arr2,arr3) );
    // console.log( [...arr1,...arr2,...arr3])
    //合并数组都是浅拷贝
    //如果改变新数组里面的值，原来数组里面的内容也会改变

    //和结构赋值结合
    // const [first, ...rest]=[1,2,3,4,5];
    // console.log(first);
    // console.log(rest)
    // const [first, ...rest] = [1, 2, 3, 4, 5];
    // console.log(first) // 1
    // console.log(rest)  // [2, 3, 4, 5]

    // const [ first,  ...rest] = [];
    // console.log(first) // undefined
    // console.log(rest)  // []

    // const [ first,  ...rest] = ["foo"];
    // console.log(first)  // "foo"
    // console.log(rest)   // []



    //将字符串转化为数组
    //console.log( [...'hello'] );

    //实现了Iterator接口的对像
    // let nodeList = document.querySelectorAll('div');
    // let array = [...nodeList];
    // console.log(nodeList);
    // console.log(array);

    // let arrayLike = {
    //     '0': 'a',
    //     '1': 'b',
    //     '2': 'c',
    //     length: 3
    //   };
      
    // TypeError: Cannot spread non-iterable object.
    //   let arr = [...arrayLike];
    //   console.log(arr);

    // let map = new Map([
    //     [1, 'one'],
    //     [2, 'two'],
    //     [3, 'three'],
    //   ]);
    // let arr = [...map.keys()]
    // console.log(arr)

    // //Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
    // const go = function*(){
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // }
      
    // console.log( [...go()] );

    //Array.from()
    //Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
    // let arayLike = {
    //     "0":'a',
    //     '1':"b",
    //     '2':'c',
    //     length:3
    // }
    // let arr2 = Array.from(arayLike);
    // console.log(arr2);

    //console.log(Array.from('hello'));
    //let namesSet = new Set(['a', 'b'])
    //console.log( Array.from(namesSet) );

    //Array.from([1, 2, 3])
    
    //Array.of()
    //Array.of方法用于将一组值，转化为数组
    // console.log(Array.of(3,11,8));
    // console.log(Array.of(3));
    // console.log( Array.of(3).length );
    // console.log( Array.of() )// []
    // console.log( Array.of(undefined) )// [undefined]
    // console.log( Array.of(1) )// [1]
    // console.log( Array.of(1, 2) )// [1, 2]

    //数组实例的 copyWithin()
    //数组实例的copyWithin方法，
    //在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
    //然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
    // 将3号位复制到0号位
    //let a = [1, 2, 3, 4, 5].copyWithin(0, 0, 4);
    //console.log(a);


    //数组实例的 find() 和 findIndex()
    // let a = [1, 4, -5, 10].find((n) => n < 0);
    // console.log(a);
    // let b = [1, 5, 10, 15].find(function(value, index, arr) {
    //     return value > 9;
    // }) 
    // console.log(b);

    // function f(v){
    //     return v > this.age;
    // }
    // let person = {name: 'John', age: 20};
    // let a = [10, 12, 26, 15].find(f, person); 

    //数组实例的fill方法
    //console.log( ['a','b','c'].fill(7) );
    //console.log( ['a', 'b', 'c'].fill(7, 1, 2) );
    // ['a', 7, 'c']

    // forEach方法
//     let a = [,'a'].forEach((x,i) => console.log(i)); // 1

//     // filter方法
//     let b = ['a',,'b'].filter(x => true) // ['a','b']

//     // every方法
//     let c = [,'a'].every(x => x==='a') // true

//    // reduce方法
//    let d = [1,,2].reduce((x,y) => x+y) // 3

//    // some方法
//    let e = [,'a'].some(x => x !== 'a') // false

//    // map方法
//    let f = [,'a'].map(x => 1) // [,1]

//    // join方法
//    let g =[,'a',undefined,null].join('#') // "#a##"

//    // toString方法
//    var h=[,'a',undefined,null].toString() // ",a,,"



//flat(),flatMap()
//将数组拉平
//console.log( [1,2,[3,4]].flat() );
//拉平一层
//console.log( [1, 2, [3, [4, 5]]].flat() );
//拉平两层
//console.log( [1, 2, [3, [4, 5]]].flat(2) );
//不管嵌套多少层，统统拉平
//console.log( [1, [2, [3]]].flat(Infinity) );
//去除空格
//console.log( [1, 2, , 4, 5].flat() );

//flatMap()方法对原数组的每个成员执行一个函数
//let a = [2, 3, 4].flatMap((x) => [x, x * 2]);
//console.log( a );


//数组实例的includes()
//console.log( [1,2,3].includes(2) );
//console.log([1, 2, 3].includes(3, -1));

//数组实例 entries(), keys(), values()
//ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// for (let index of ['a', 'b'].keys()) {
//     console.log(index);
//   }
//   // 0
//   // 1
  
//   for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
//   }
//   // 'a'
//   // 'b'
  
//   for (let [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem);
//   }
























    }
    render() {
        return (
            <div className="foot">
                <h1>you are ArrayComponent </h1>
            </div>
        );
    }
}

export default ArrayComponent;
