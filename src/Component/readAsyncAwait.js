const fs = require('fs');



//async
//代表这个函数里面包含异步执行的代码
// async function fn(){
//     let f1 = await readFile('data/a.txt');
//     console.log(f1);
//     console.log(f1.toString());
//     let f2 = await readFile('data/b.txt');
//     console.log(f2.toString());
//     let f3 = await readFile('data/c.txt');
//     console.log(f3.toString());
// }
// fn();

//async特点
//代表这个函数有异步执行任务
//await代表后面的结果需要等待
//await只能放到async函数里面
//相对于generator语意化更好理解
//await后面后面可以是promise对象
//await后面也可以是普通的数据类型
//只要await语句后面promise的状态reject状态
//整个async函数就会中断执行

// async function fn(){
//     return "welcome"
// }
// console.log( fn() );

// async function fn(){
//     throw new Error('it is wrong')
// }

// async function fn(){
//     try{
//         await Promise.reject('it is wrong').catch(err=>console.log(err))
//     }catch(e){
//         console.log(e);
//     }
   
//     await Promise.resolve('go go go')
//     console.log('wwwwww');
   
// }
// fn().then(res=>{
//     console.log(res+"?")
// })


//简单封装  fs封装成一个promise
const readFile = function (fileName){
    return new Promise((resolve, reject) =>{
        fs.readFile(fileName, (err, data) =>{
            if(err) reject(err);
            resolve(data);
        });
    });
}

async function fn(){
    let [a,b,c] = await Promise.all([
        readFile('data/a.txt'),
        readFile('data/b.txt'),
        readFile('data/c.txt')
    ]);

    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}

fn();
