import React, { Component } from 'react';

class Foot extends Component {
  componentWillMount() {
    //'Destructuring______
      
    // let [a, b, c] =[1, 2, 3];
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // let [foo, [[bar], baz]] = [1,[[2], 3]];
    // console.log(foo);
    // console.log(bar);
    // console.log(baz);

    // let [x, ,y] =[1,2,3];
    // console.log(x);
    // console.log(y);

    // let [head, ...tail] =[1,2,3,4];
    // console.log(head);
    // console.log(tail);

    // let [x, y, ...z] =['a'];
    // console.log(x);
    // console.log(y);
    // console.log(z);

    // let [foo] = []
    // console.log(foo);

    // let [bar, foo] =[1];
    // console.log(foo);

    // let [x, y] =[1,2,3]
    // console.log(x);
    // console.log(y);

    // let [a, [b], d] = [1,[2,3], 4];
    // console.log(a);
    // console.log(b);
    // console.log(d);

    //set数据结构的结构赋值
    // let [x,y,z] = new Set(['a','b','c']);
    // console.log(x);
    // console.log(y);
    // console.log(z);


  }
  render() {
    return (
      <div className="foot">
          <h1>you are Foot</h1>
      </div>
    );
  }
}

export default Foot;
