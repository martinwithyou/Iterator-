import React, { Component } from 'react';

class Height extends Component {
  componentWillMount() {
  //默认值
//   let [foo = true ] =[];
//   console.log(foo);
   
//   let [x, y='b'] = ['a'];
//   console.log(x);
//   console.log(y);

//   let [x, y='b'] = ['a',undefined];
//   console.log(x);
//   console.log(y);

//   let [x =1 ]=[undefined];
//   console.log(x);

// let [x = 1 ] = [null];
// console.log(x);

// function f(){
//     console.log('aaa');
// }
// let [ x = f() ]= [1];
// console.log(x);

let [x=1, y=x] =[];
//let [x =1, y=x] =[2];
//let [x=1,y=x] =[1,2];
//let [x=y,y=1] =[];

}
render() {
    return (
      <div className="foot">
          <h1>you are Heigh </h1>
      </div>
    );
}
}

export default Height;
