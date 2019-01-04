import React, { Component } from 'react';
import './index.css';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    //  console.log("this is button");
    //  for(var i=0; i<10; i++){
    //   //console.log("i______",i);
    //  }
    //  console.log("i______",i);
    // var a = [];
    // for(let i = 0; i<10;i++){
    //   a[i] = function(){
    //     console.log(i);
    //   }
    // }
    // console.log(foo);
    // var foo = 2;

    // console.log(bar);
    // let bar= 2;
    // var tmp = 123;
    // if(true){
    //   tmp = 'abc';
    //   let tmp;
    // }

    // if(true){

    //   tmp = 'abc';
    //   console.log(tmp);

    //   let tmp;
    //   console.log(tmp);

    //   tmp =123;
    //   console.log(tmp)
    // }

    // function func(){
    //   let a =10;
    //   let a =1;
    // }

    // function func(arg){
    //   let arg
    // }

    // function func(arg){
    //     {
    //       let arg
    //     }
    // }

    // var tmp = new Date();
    // function f(){
    //   console.log(tmp);
    //   if(false){
    //     var tmp = 'hello world'
    //   }
    // }
    //f();

    // var s = 'hello';
    // for(var i= 0;i<s.length;i++){
    //   console.log(s[i]);
    // }
    // console.log(i);

    // function f1(){
    //   let n = 5;
    //   if(true){
    //     let n = 10;
    //   }
    //   console.log(n);
    // }
    // f1();

    //{{{{{{let insance = 'hello world' }}}}}};

    // {{{{
    //   {let insance = 'hello world'}
    //   console.log(insance);
    // }}}}

    // {{{{
    //   let insane ='hello world';
    //   {let insane = 'helloworld'}
    // }}}}
   
    // function f(){ console.log('i am outside')}

    // (function(){
    //   if(false){
    //     function f(){console.log('i am outside');}
    //   }

    //   f();
    // }());

    //函数声明语句
    {
      let a = 'sesret';
      function f(){
        return a;
      }
    }

    //函数表达式
    {
      let a = 'secret';
      let f = function(){
        return a;
      }
    }

  }

  componentWillMount() {
    //console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
    // console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
     // console.log('Component WILL RECEIVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
     // console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    //  console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
    //   console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div className="head">
          <h1>you are head</h1>
          {/* <button onClick={this.setNewNumber}>button</button> */}
      </div>
    );
  }
}

export default Head;
