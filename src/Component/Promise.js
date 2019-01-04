import React, { Component } from 'react';

class PromiseComponent extends Component {

    componentWillMount() {
     //Promise的含义
     //Promise 是异步编程的一种解决方案，
     //比传统的解决方案——回调函数和事件——更合理和更强大。
     //它由社区最早提出和实现，ES6 将其写进了语言标准，
     //统一了用法，原生提供了Promise对象。

     //promise对象有一下两个特点
     //（1）对象的状态不受外界影响。
     //Promise对象代表一个异步操作，
     //有三种状态：pending（进行中）、
     //fulfilled（已成功）
     //和rejected（已失败）。
     //只有异步操作的结果，
     //可以决定当前是哪一种状态，
     //任何其他操作都无法改变这个状态。
     //这也是Promise这个名字的由来，它的英语意思就是“承诺”，
     //表示其他手段无法改变。

     //一旦状态改变，就不会再变，任何时候都可以得到这个结果。
     //Promise对象的状态改变，只有两种可能：
     //从pending变为fulfilled和从pending变为rejected。
     //只要这两种情况发生，状态就凝固了，不会再变了，
     //会一直保持这个结果，这时就称为 resolved（已定型）。
     //如果改变已经发生了，你再对Promise对象添加回调函数，
     //也会立即得到这个结果。这与事件（Event）完全不同，
     //事件的特点是，如果你错过了它，再去监听，是得不到结果的。

     //有了Promise对象，就可以将异步操作以同步操作的流程表达出来，
     //避免了层层嵌套的回调函数。
     //此外，Promise对象提供统一的接口，
     //使得控制异步操作更加容易。

     //Promise也有一些缺点。首先，无法取消Promise，
     //一旦新建它就会立即执行，无法中途取消。
     //其次，如果不设置回调函数，Promise内部抛出的错误，
     //不会反应到外部。
     //第三，当处于pending状态时，
     //无法得知目前进展到哪一个阶段（
     //刚刚开始还是即将完成）。

     //果某些事件不断地反复发生，
     //一般来说，使用 Stream 模式是比部署Promise更好的选择。

     //基本用法
    //  const promise  = new Promise(function(resolve,reject){
    //     //...some code
    //     if(true){
    //         resolve(value)
    //     }else{
    //         reject(error)
    //     }
    //  })

    // function timeout(ms){
    //     return new Promise( (resolve, reject) =>{
    //         setTimeout(resolve, ms, 'done');
    //     });
    // }
    // timeout(100).then( (value)=>{
    //     console.log(value);
    // })


    // let promise  = new Promise(function(resolve,reject){
    //     console.log('promise');
    //     resolve();
    // });
    // promise.then(function(){
    //     console.log('resolved');
    // })
    // console.log('hi');

    //异步加载图片
    // function loadImageAsync(url){
    //     return new Promise(function(resolve,reject){
    //         const image = new Image();
    //         image.onload = function(){
    //             resolve(image)
    //         }
    //         image.onerror = function(){
    //             reject(new Error('cant not load image at '+ url))
    //         }
    //         image.src=url
    //     })
    // }


    //Promise实现ajax
    // const getJSON = function(url){
    //     const promise = new Promise(function(resolve,reject){
    //         const handler = function(){
    //             if(this.readyState !== 4){
    //                 return;
    //             }
    //             if(this.status === 200){
    //                 resolve(this.response)
    //             }else{
    //                 reject(new Error(this.statusText))
    //             }
    //         };
    //         const client =new XMLHttpRequest();
    //         client.open('GET', url);
    //         client.onreadystatechange =handler;
    //         client.responseType='json';
    //         client.setRequestHeader('Accept','application/json');
    //         client.send();
    //     });
    //     return promise;
    // }

    // getJSON('/post.json').then(function(json){
    //     console.log("contents:"+json)
    // },function(error){
    //     console.error("wrong"+error)
    // });

    // const p1 = new Promise(function (resolve, reject) {
    //     setTimeout(() => reject(new Error('fail')), 3000)
    //   })
      
    //   const p2 = new Promise(function (resolve, reject) {
    //     setTimeout(() => resolve(p1), 1000)
    //   })
      
    //   p2
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error))


    // new Promise((resolve, reject) => {
    //     resolve(1);
    //     console.log(2);
    //   }).then(r => {
    //     console.log(r);
    //   });

    //一般来说，调用resolve或reject以后，
    //Promise 的使命就完成了，后继操作应该放到then方法里面，
    //而不应该直接写在resolve或reject的后面。
    //所以，最好在它们前面加上return语句，这样就不会有意外

    // new Promise((resolve, reject) => {
    //     return resolve(1);
    //     // 后面的语句不会执行
    //     console.log(2);
    // }).then(r => {
    //         console.log(r);
    // });

    // getJSON('/posts.json').then(function(json){
    //     return json.post
    // }).then(function(post){
    //    //...
    // })

    // getJSON('/posts.json').then(function(posts){
    //     //...
    // }).catch(function(error){
    //    //处理getJSON和前一个回调函数运行时发生的错误
    // });

    //上面代码中，getJSON方法返回一个 Promise 对象，
    //如果该对象状态变为resolved，
    //则会调用then方法指定的回调函数；
    //如果异步操作抛出错误，状态就会变为rejected，
    //就会调用catch方法指定的回调函数，
    //处理这个错误。另外，then方法指定的回调函数，
    //如果运行中抛出错误，也会被catch方法捕获。

    // p.then( (val)=> console.log('fulfilled:',val))
    //  .catch((err)=>console.log('rejected', err));

    //  //等同于
    // p.then( (val) => console.log('fullfilled:', val))
    //  .then(null, (err)=>console.log("reject:",err));
 
    // const promise = new Promise(function(resolve,reject){
    //     throw new Error('test');
    // });
    // promise.catch(function(error){
    //     console.log(error)
    // })

    // const promise = new Promise(function(resolve,reject){
    //     try{
    //        throw new Error('test')
    //     }catch(e){
    //         reject(e)
    //     }
    // });
    // promise.catch(function(error){
    //     console.log(error);
    // })

    // const promise =new Promise(function(resolve,reject){
    //     reject(new Error('test'));
    // });
    // promise.catch(function(error){
    //     console.log(error);
    // })

    // // good
    // promise
    // .then(function(data) { //cb
    // // success
    // })
    // .catch(function(err) {
    // // error
    // });

    // const someAsyncThing = function(){
    //     return new Promise(function(resolve,reject){
    //         resolve(2);
    //     });
    // };
    // someAsyncThing().then(function() {
    //     return someOtherAsyncThing();
    //   }).catch(function(error) {
    //     console.log('oh no', error);
    //     // 下面一行会报错，因为 y 没有声明
    //     y + 2;
    //   }).then(function() {
    //     console.log('carry on');
    // });
    //   // 

    // 生成一个Promise对象的数组
    // const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    //     return getJSON('/post/' + id + ".json");
    // });
  
    // Promise.all(promises).then(function (posts) {
    //     // ...
    // }).catch(function(reason){
    //     // ...
    // });

    // const p = new Promise((resolve,reject)=> reject('出错了'))；
    // p.then(null, function(s){

    // });

    //promise应用
    // const preloadImage = function(path){
    //     return new Promise(function(resolve,reject){
    //        const image = new Image();
    //        image.onload = resolve;
    //        image.onerror = reject;
    //        image.src =path;
    //     });
    // }
    // preloadImage("www.baidu.com").then()


    // let a = 10;

    // let promise = new Promise(function(resolve, reject){
    //     if(a === 10){
    //         resolve("success");
    //     }else{
    //         reject("error");
    //     }
    // });

    // promise.then(res=>{
    //     console.log(res)
    // },err=>{
    //     console.log(err)
    // })

    // let a = 130;

    // let promise = new Promise(function(resolve, reject){
    //     if(a === 10){
    //         resolve("success");
    //     }else{
    //         reject("error");
    //     }
    // });

    // promise.then(res=>{
    //     console.log(res)
    // },err=>{
    //     console.log(err)
    // })

    // promise.catch(err=>{
    //     console.log(err)
    // })

    //new Promise().then(res=>{}).catch(err=>{})

    // Promise.resolve('aa');
    // Promise.reject('bb');

    //Promise.all( [p1,p2,p3]);

    //let p = Promise.resolve('aaa');
    //let p2 =
    // let e1 = Promise.resolve('aaa');
    // let e2 = Promise.resolve('aaa');
    // let e3 = Promise.resolve('aaa');
    















    }
    render() {
        return (
            <div className="foot">
                <h1>you are PromiseComponent</h1>
            </div>
        );
    }
}

export default PromiseComponent;
