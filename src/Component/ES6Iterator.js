import React, { Component } from 'react';

class ES6IteratorComponent extends Component {
    componentWillMount() {
  
        //es5迭代器代码
        function literator(arr){
           let i = 0;
           //计数器
           return{
               next(){
                   let done =(i>=arr.length);
                   let value=(!done?arr[i++]:undefined);
                   return{
                       value:value,
                       done:done
                   }
               }
           }
        }

        let myCase =literator([1,2,3,4,5]);
        // console.log(myCase.next());
        // console.log(myCase.next());
        // console.log(myCase.next());
        // console.log(myCase.next());
        // console.log(myCase.next());
        // console.log(myCase.next());
 
        //generator函数
        function* show(){
            yield "hello";
            yield "world";
            yield "ni hao";
            return "返回值"
        }

        let res = show();
        // console.log(res.next());
        // console.log(res.next());
        // console.log(res.next());
        // console.log(res.next());
        // console.log(res.next());

        function* myGenerator(arr){
            for(let i=0;i<arr.length;i++){
                yield arr[i]
            }
        }

        let test = myGenerator([1,2,3]);
        // console.log(test.next());
        // console.log(test.next());
        // console.log(test.next());
        // console.log(test.next());

        var m = new Map();
        m.set(1,'black');
        m.set(2,'red');
        m.set("color",2);
        m.set({x:1},7);
        //console.log(m);

        m.forEach(function(item, key, mapObj){
           //console.log(item.toString() )
        });

        let TheDay = new Date();
        let year =TheDay.getFullYear();
        let month =(TheDay.getMonth())+1;
        let day =TheDay.getDay();
        //console.log(year+":"+month+":"+day)

        var a = new Array("日", "一", "二", "三", "四", "五", "六");  
        var week = new Date().getDay();  
        var str = "今天是星期"+ a[week];  
        //console.log(str);

        // class Animal{
        //     constructor(){
        //         this.type = 'animal'
        //     }
        //     says(say){
        //         setTimeout(function(){
        //            console.log(this.type+'____says___'+say)
        //         },1000)
        //     }
        // }
        // var animal = new Animal();
        // animal.says('hi');

        // class Animals{
        //     constructor(){
        //         this.type = 'animal'
        //     }
        //     says(say){
        //         setTimeout(()=>{
        //             console.log(this.type + ' says ' + say)
        //         },1000)
        //     }
        // }
        // var animals = new Animals();
        // animals.says("h1");

        //当要求动态上下文的时候，就不能使用箭头函数，
        //也就是固化this
        //箭头函数里面所指向this,不是所使用的对象，
        //儿时定义所在的对象
        //不能够作为构造函数
        //不能使用argments对象
        //不能使用yield

        //*let是更完美的var，不是全局变量，具有块级函数作用域,
        //大多数情况不会发生变量提升。
        //const定义常量值，不能够重新赋值，
        //如果值是一个对象，可以改变对象里边的属性值
        //let 
        //1、let声明的变量具有块级作用域
        //2、let声明的变量不能通过window.变量名进行访问
        //3、形如for(let x..)的循环是每次迭代都为x创建新的绑定
        //下面是var带来的不合理场景

        // var a =[]
        // for(var i=0;i<5;i++){
        //     a[i]=function(){
        //         //console.log(i);
        //     }
        // }
        // a[3]()

        // const set = new Set([1,2,3,4,8,8,8]);
        // console.log([...set]);
        //let a =Array.from(new Set([1,2,3,4,8,8,8]))
        //console.log(a);

     
        // var promise = new Promise( (resolve, reject)=>{
        //     if(true){
        //        resolve("vale")
        //     }else{
        //        reject("error")
        //     }
        // })
        // promise.then(function(value){
        //    console.log(value)
        // },function(value){
        //     console.log(value)
        // });

        class Animal{
            constructor(){
                this.type='animal'
            }
            says(say){
                console.log(this.type+'_say_'+say)
            }
        }

        let animal = new Animal();
        //animal.says('Ppppppppppp');

        class Cat extends Animal{
            constructor(){
                super()
                this.type='cat'
            }
        }
        let cat = new Cat()
        //cat.says("miaomiao.........");

        class Dog extends Animal{
            constructor(){
                super()
                this.type="dag"
            }
        }

        let dog = new Dog();
        //dog.says('wanwanwan-------');
        //可以看出在使用extend的时候结构输出是cat says hello 
        //而不是animal says hello。
        //说明contructor内部定义的方法和属性是实例对象自己的，
        //不能通过extends 进行继承。
        //在class cat中出现了super(),这是什么呢
        //在ES6中，子类的构造函数必须含有super函数，
        //super表示的是调用父类的构造函数，
        //虽然是父类的构造函数，
        //但是this指向的却是cat
      
        let as={aaa:11}
        let b={bbb:11}
        let c={ccc:11}
        var n = Object.assign({},as,b,c)
        //向n中添加a,b,c的属性
        //console.log(n);

        //var funcs = [];
        // for(var i =0;i++;i<10){
        //     funcs.push( function(){console.log(i)});
        // }
        // console.log("func____",funcs);
        // funcs.forEach(function(func){
        //     func();
        // });
        //无任何内容输出

        // for(let i=0;i<10;i++){
        //     funcs.push(function(){
        //         console.log(i)
        //     })
        // }
        // console.log(funcs);
        // funcs.forEach(function(func) {
        //     func()
        // });

        // var funcs = []
        // for( var i=0;i<10;i++){
        //     funcs.push( (function(value){
        //         return function(){
        //             console.log(value)
        //         }
        //     }(i) 
        //     ))
        // }

        // setTimeout(function(){
        //  console.log(1)
        // },0)

        // new Promise(function executor(resolve){
        //     console.log(2);
        //     for(var i=0;i<10000;i++){
        //         i==9999 && resolve()
        //     }
        //     console.log(3);

        // }).then(function(){
        //     console.log(4);
        // });
        
        // console.log(5);

        //promise.all()的使用：
        //Promise.all方法用于将多个Promise实例，
        //包装成一个新的Promise实例。
        //Promise.all方法接受一个数组作为参数，
        //数组里的元素都是Promise对象的实例，
        //如果不是，就会先调用下面讲到的Promise.resolve方法，
        //将参数转为Promise实例，再进一步处理。
        //（Promise.all方法的参数可以不是数组，
        //但必须具有Iterator接口，
        //且返回的每个成员都是Promise实例。）

        //let functions = (a,b) => a+b;
        //console.log(functions(1,12))














































    }
    render() {
        return (
            <div className="foot">
                <h1>you are ES6IteratorComponent</h1>
            </div>
        );
    }
}

export default ES6IteratorComponent;
