import React, { Component } from 'react';
import './index.css';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
          opacity: 1.0
        };
    }
    componentWillMount() {
        //const

        //console.log('Component WILL MOUNT!')
        //const PI =3.1415;
        //PI = 3;
        //const 声明一个只读的常量，常量的值一旦声明，就不能改变
        //const foo;
        // if(true){
        //    const max = 5;
        // }
        // console.log(max);

        // var message = 'hello';
        // let age =25;

        // const message = 'goodbye';
        // const age = 30;

        // const foo = {};
        // foo.props =123
        // console.log(foo);

        // foo={};

        // const a = [];
        // a.push('hello');
        // a.length = 0;
        // a =['dive']



        //对象冻结
        // const foo = Object.freeze({});
        // foo.props = 123;

        //另外一种对象冻结
        // var constantize = (obj) => {
        //    Object.freeze(obj);
        //    Object.keys(obj).forEach( (key , i)=>{
        //         if(typeof obj[key] === 'object'){
        //            constantize( obj[key]);
        //         }
        //    })
        // }

        // var a = 1;
        // console.log(window.a);

        // let b = 1;
        // console.log(window.b);
    }
    
    componentDidMount() {
        //console.log('Component DID MOUNT!')
    }
    
    componentWillReceiveProps(newProps) {
        //console.log('Component WILL RECEIVE PROPS!')
    }
    
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
        //console.log('Component WILL UPDATE!');
    }
    
    componentDidUpdate(prevProps, prevState) {
        //console.log('Component DID UPDATE!')
    }
    
    componentWillUnmount() {
        //console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
            <div className="body">
                <h1>you are Body</h1>
            </div>
        );
    }
}

export default Body;
