import React, { Component } from 'react';

class ReflectComponent extends Component {

componentWillMount() {
  
    //Reflect
    //是es6操作对象提供的新的api
    //设计目的
    //
    //1.可以从Reflect对象上拿到语言内部的方法
    //2.修改Object方法返回的结果
    // if(Reflect.defineProperty(target,property,attributes)){

    // }else{

    // }
    //让object操作都变成函数行为
    //Reflect.has(Object,'assign');
    //不管proxy增怎样修改默认行为，
    //你总可以在reflect上获取默认行为

    // Proxy( target, {
    //     set:function(target,name,value,receiver){
    //         var success = Reflect.set(target, name, value,receiver);
    //         if(success){
    //             console.log('property ' + name + ' on ' + target + ' set to ' + value);
    //         }
    //         return success;
    //     }
    // });

    // var loggedObj = new Proxy(obj,{
    //   get(target,name){
    //       console.log('get',target,name);
    //       return Reflect.get(target,name);
    //   },
    //   deleteProperty(target,name){
    //       console.log('delete'+name);
    //       return Reflect.deleteProperty(target,name);
    //   },
    //   has(target,name){
    //       console.log('has'+name);
    //       return Reflect.has(target,name)
    //   }
    // });

    // Reflect.apply(Math.floor,undefined,[1.75]);

    // //Reflect对象一共有 13 个静态方法。

    // Reflect.apply(target, thisArg, args)
    // Reflect.construct(target, args)
    // Reflect.get(target, name, receiver)
    // Reflect.set(target, name, value, receiver)
    // Reflect.defineProperty(target, name, desc)
    // Reflect.deleteProperty(target, name)
    // Reflect.has(target, name)
    // Reflect.ownKeys(target)
    // Reflect.isExtensible(target)
    // Reflect.preventExtensions(target)
    // Reflect.getOwnPropertyDescriptor(target, name)
    // Reflect.getPrototypeOf(target)
    // Reflect.setPrototypeOf(target, prototype)
}
render() {
    return (
      <div className="foot">
          <h1>you are ReflectComponent</h1>
      </div>
    );
}
}

export default ReflectComponent;
