import React, { Component } from 'react';

class Outter extends Component {
  componentWillMount() {
  
  //数组和布尔值的结构赋值
//   let { toString :s}=123;
//   console.log(s===Number.prototype.toString);

//   let { toString : sS}=true;
//   console.log(sS===Boolean.prototype.toString);

//函数的参数的结构赋值
// function add([x,y]){
//     return x+y
// }
// console.log( add([1,2]) );

//console.log([ [1,2],[3,4]].map( (a,b)=> a+b) )

// function move( {x,y}= {x:0, y:0}){
//     return [x,y];
// }
// console.log( move({x:3,y:8}) );
// console.log( move({x:3}) );
// console.log( move({}) );
// console.log( move() );

//console.log( [1, undefined, 3].map( (x='yes')=>x) );

//解构赋值的用途
//交换变量的值
// let x =1;
// let y =2;
// [x,y]=[y,x];
// console.log([x,y]);

//从函数返回多个值
// function example(){
//     return [1,2,3]
// }
// let [a,b,c] =example();
// console.log([a,b,c]);

//返回一个对象
// function example(){
//     return{
//         foo:1,
//         bar:2
//     }
// }
// let {foo, bar} = example();
// console.log(foo);
// console.log(bar);

//函数参数的定义
// function f([x,y,z]){
//     return x+y+z
// }
// console.log(f([1,2,3]));

// function f({x,y,z}){
//     return x+y+z
// }
// console.log( f({x:3,y:7,z:9})   )

//提取json
// let jsonData = {
//     id:42,
//     status:'ok',
//     data:[867,5309]
// }

// let {id, status,data:number}=jsonData;
// console.log(id, status, number)

//函数的默认值
// jQuery.ajax = function (url, {
//     async =true,
//     beforeSend = function(){},
//     cache = function(){},
//     complete=function(){},
//     crossDomain= false,
//     glibal=true
// }){

// }

//遍历map结构
// const map = new Map();
// map.set('first','hello');
// map.set('second','world');
// for(let [key, value] of map){
//     console.log(key+'____is____'+value)
// }

//结构赋值
//const {sourceMapConsumer, SourceNode}= require("source-map");


}
render() {
    return (
      <div className="foot">
          <h1>you are Outter </h1>
      </div>
    );
}
}

export default Outter;
