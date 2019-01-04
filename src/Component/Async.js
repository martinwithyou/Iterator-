import React, { Component } from 'react';
import { isObject } from 'util';

class AsyncComponent extends Component {
    componentWillMount() {
  
     //es2017标准映入async函数
     //使得异步操作变得更加方便
     //async函数是什么？
     //它是Generator函数的语法糖

    //  const fs = require('fs');

    //  const readFile = function(fileName){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile(fileName,function(error,data){
    //             if(error) return reject(error);
    //             resolve(data);
    //         });
    //     });
    //  }

    //  const gen = function* (){
    //     const f1 = yield readFile('./etc/fstab');
    //     const f2 = yield readFile('./etc/shells');
    //     console.log(f1.toString());
    //     console.log(f2.toString());
    //  }

    //  const asyncReadFile = async function(){
    //      const f1 = await readFile('/etc/fstab');
    //      const f2 = await readFile('./etc/shells');
    //      console.log(f1.toString());
    //      console.log(f2.toString());
    //  }

    //  asyncReadFile();

     //async函数 和 generator函数比较
     //async函数自己内置执行器
     //更好的语意，asynac表示函数里面有异步操作
     //await表示紧跟在后面表达式需要等待结果
     //更广的适用性
     //await命令后面，返回promise对象，还有原始类型的值
     //返回promise
     //async函数返回promise，可以用then制定下一步的操作

    //  async function getStockPriceByName(name){
    //     const symbol = await geyStockSymbol(name);
    //     const stockPrice = await getStockPrice(symbol);
    //     return stockPrice
    //  }
    //  getStockPriceByName('goog').then(function(result){
    //      console.log(result);
    //  })


    // function timeout(ms){
    //   return new Promise( (resolve)=>{
    //       setTimeout(resolve, ms);
    //   });
    // }
    // async function asyncPrint(value,ms){
    //     await timeout(ms);
    //     console.log(value);
    // }
    // asyncPrint('hello world',5000);

    // async function timeout(ms){
    //     await new Promise((resolve)=>{
    //         setTimeout(resolve, ms)
    //     });
    // }

    // async function asyncPrint(value, ms){
    //     await timeout(ms);
    //     console.log(value);
    // }

    // asyncPrint('hello world_____',50);

    //函数声明
    //async function foo(){}
    //函数表达式
    //const foo = async function(){}
    //对象的方法
    //let obj = { async foo() {}}
    //obj.foo().then(...)
    //class方法
    // class Storage{
    //     constructor(){
    //         this.cachePromise = cache.open('avatars');
    //     }
    //     async getAvatar(name){
    //         const cache = await this.cachePromise;
    //         return cache
    //     }
    // }
    //async函数语法规则总体上是比较简单
    //难点在于错误处理机制

    //返回Promise对象
    //
    // async function f(){
    //     return 'hello world'
    // }
    // f().then(v=>console.log(v));

    // async function f(){
    //     throw new Error('error');
    // }

    // f().then(
    //     v=>console.log(v);
    //     e=>console.log(e);
    // )

    //Promise对象的状态变化
    // async function getTitle(url) {
    //     let response = await fetch(url);
    //     let html = await response.text();
    //     return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    // }
    // getTitle('https://tc39.github.io/ecma262/').then(console.log)

    // async function f(){
    //     //等同于
    //     //return 123
    //     return await 123
    // }

    // f().then(v=>console.log(v))

    // class Sleep{
    //     constructor(timeout){
    //         this.timeout = timeout;
    //     }
    //     then( resolve, reject){
    //         const startTime = Date.now();
    //         setTimeout(
    //             ()=>resolve(Date.now() - startTime ),
    //             this.timeout
    //         )
    //     }
    // }
    // (async()=>{
    //    const actualTime = await new Sleep(1000);
    //    console.log(actualTime)
    // })();

    // async function f(){
    //     await Promise.reject('it is wrong')
    // }

    // f()
    // .then(v=>console.log(v))
    // .catch(e=>console.log(e))


    //注意，上面代码中，await语句前面没有return，
    //但是reject方法的参数依然传入了catch方法的回调函数。
    //这里如果在await前面加上return，效果是一样的。
    //任何一个await语句后面的 Promise 对象变为reject状态，
    //那么整个async函数都会中断执行。

    // async function f(){
    //     await Promise.reject('出错了');
    //     await Promise.resolve('hello world');
    // }
    // f();

    // async function f(){
    //     try{
    //       await Promise.reject('it is wrong');
    //     }catch(e){

    //     }
    //     return await Promise.resolve('hello,world');
    // }
    // f()
    // .then(v=>console.log(v));

    // async function f(){
    //     await Promise.reject('出错了')
    //       .catch(e=>console.log(e));
    //     return await Promise.resolve('hello world')
    // }

    // f()
    // .then(v=>console.log(v))



    // async function f(){
    //     await new Promise( function(resolve, reject){
    //         throw new Error('出错了');
    //     });
    // }
    // f()
    // .then(v=>console.log(v))
    // .catch(e=>console.log(e))

    // async function f(){
    //     try{
    //       await new Promise(function(resolve,reject){
    //           throw new Error('出错了')
    //       });
    //     }catch(e){

    //     }
    //     return await('hello world')
    // }
    // f();

    // async function main(){
    //     try{
    //       const va11 
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    // const start = async () => {
    //     const res = await fetch('google.com');
    //     return res.text();
    // }
    // start().then(res=>console.log(res));

    // //顶层await的写法
    // const res = await fetch('google.com');
    // console.log(await res.text());

// function chainAnimationsPromise(elem, animations){
//    let ret = null;
//    let p =Promise.resolve();
//    for(let anim of animations){
//        p =p.then(function(val){
//            ret =val;
//            return aim(elem);
//        });
//    }
//    return p.catch(function(e){

//    }).then(function(){
//        return ret
//    });
// }

// function chainAimationsGenerator(elem,animations){
//     return spawn(function*(){
//         let ret = null;
//         try{
//             for(let anim of animations){
//               ret = yield anim(elem)
//             }
//         }catch(e){

//         }
//         return ret
//     });
// }

//async函数
// async function chainAnimationsAsync(elem, animations){
//     let ret = null;
//     try{
//         for(let anim of animations){
//           ret =await anim(elem)
//         }
//     }catch(e){

//     }
//     return ret
// }

// async function logInOrder(urls){
//     for(const url of urls){
//         const response = await fetch(url);
//         console.log(await response.text() );
//     }
// }

// async function logInOrder(urls){
//     //并发读取远程URL
//     const textPromises = urls.map( async url => {
//         const response  = await fetch(url);
//         return response.text();
//     })
//     //按次序输出
//     for(const textPromise of textPromises){
//         console.log(await textPromise);
//     }
// }

// let p1 = Promise.resolve('aaa')
// let p2 = Promise.resolve('bbb')
// let p3 = Promise.resolve('ccc')
// Promise.all([p1,p2,p3]).then(res=>{
//     let [res1,res2,res3] = res;
//     console.log(res1,res2,res3)
// })
//all are resolve status

//Promise.race();
//有一个成功就返回

// let status = 1;
// let userLogin =(resolve, reject)=>{
//     setTimeout(()=>{
//         if(status === 1){
//             resolve({data:'xxx',msg:"xxx",token:"xxxx"});
//         }else{
//             reject('error')
//         }
//     },2000)
// }

// let getUserInfo = (resolve, reject)=>{
//     setTimeout(()=>{
//         if(status === 1){
//             resolve({data:'getUserInfo',msg:"xxx",token:"xxxx"});
//         }else{
//             reject('error')
//         }
//     },2000)
// }

// new  Promise(userLogin).then(res=>{
//     console.log(res);
//     return res
// }).then(res=>{
//     console.log(res)
// })
































    }
    render() {
        return (
            <div className="foot">
                <h1>you are AsyncComponent</h1>
            </div>
        );
    }
}

export default AsyncComponent;
