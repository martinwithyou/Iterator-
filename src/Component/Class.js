import React, { Component } from 'react';

class ClassComponent extends Component {
    componentWillMount() {
    //    function point(x,y){
    //        this.x =x;
    //        this.y =y;
    //    }
    //    point.prototype.toString = function(){
    //        return this.x+this.y
    //    }
    //    var p = new point(1,2);
    //    console.log(p);

//     class Point{
//         constructor(x,y){
//             this.x = x;
//             this.y = y;
//         }
//         toString(){
//             return this.x+this.y
//         }
//     }
//     console.log(typeof Point);

//     class Bar{
//         doStuff(){
//             console.log('stuff');
//         }
//     }
//     var b = new Bar();
//    console.log( b.doStuff() );
   //构造函数的prototype属性，
   //在 ES6 的“类”上面继续存在。
   //事实上，
   //类的所有方法都定义在类的prototype属性上面

//    let person  =new class{
//        constructor(name){
//            this.name =name;
//        }
//        sayName(){
//            console.log(this.name);
//        }
//    }('zhang_san');

//    person.sayName();

// class Bar{
//     doStuff(){
//         console.log('stuff')
//     }
// }
// var b = new Bar();
// b.doStuff();
//构造函数的prototype属性，
//在 ES6 的“类”上面继续存在。
//事实上，
//类的所有方法都定义在类的prototype属性上面。

// class Point{
//     constructor(){

//     }
//     toString(){

//     }
//     toValue(){

//     }
// }

// var p = new Point();
// console.log(p);

// console.log(Point.prototype)

// class B{}
// let b = new B();
// console.log(b.constructor === B.prototype.constructor);

// class Point{
//     constructor(){

//     }
// }
// Object.assign()

//严格模式
//constructor方法
// class Point{

// }
// class Point{
//     constructor(){}
// }

//定义类
// class Point{
//     constructor(x,y){
//         this.x =x;
//         this.y =y;
//     }
//     toString(){
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }

// var  point  =new Point(2,3);
// //console.log( point.toString() );
// //console.log( point.hasOwnProperty('x') ) // true
// //console.log( point.hasOwnProperty('y') )// true
// //console.log(point.hasOwnProperty('toString') )// false
// //console.log(point.__proto__.hasOwnProperty('toString') )
// // true
// var p1 =new Point(2,3);
// var p2 =new Point(3,2);
// console.log(p1.__proto__ === p2.__proto__ );

// let person =new class{
//     constructor(name){
//         this.name =name
//     }
//     sayName(){
//         console.log(this.name)
//     }
// }('zhangsan');
// person.sayName();

//类不存在变量提升

// class ColorPoint extends Point{
//     constructor(x,y,color){
//         super(x,y)
//         //调用父类的constructor
//         this.color = color
//     }
//     toString(){
//         return this.color + ' ' + super.toString(); // 调用父类的toString()
//     }
// }

// //面向对象
// function Person(name,age){
//    this.name = name;
//    this.age = age; 
// }
// Person.prototype.showName =function(){
//   return 'welcome'+this.name
// }
// Person.prototype.showAge = function(){
//     return 'welcome'+this.age
// }
// Object.assign(Person.prototype,{
//     showNamerrr(){
//         return 'welcome'+this.name
//     },
//     showNamesss(){
//         return 'welcome'+this.name
//     }
// })
// let p1 = new Person('martin', 18);
// console.log( p1 );
// console.log( p1.showName() );
// console.log( p1.showAge() );

// class Person{
//     constructor(name,age){
//         //构造方法（函数）
//         //调用new ,自动执行
//         this.name = name;
//         this.age = age;
//         console.log("构造函数"+this.name+"____"+this.age);
//         this.showName = this.showName.bind(this);
//     }
//     showName(){
//         return 'welcome'+this.name
//     }
//     showName(){
//         return 'welcome________________'+this.age
//     }
//     get aaa(){
//         return 'aaa_status'
//     }
//     set aaa(val){
//         console.log(val);
//     }
// }

// let p1 = new Person();
// p1.aaa = '123567890';
// console.log(p1.aaa);

// //静态方法
// class Person{
//     constructor(){

//     }
//     showName(){
//         return '这是show_name方法'
//     }
//     static aaa(){
//         return '这是静态方法'
//     }
// }
// let p1 = new Person();
// console.log(p1.showName());
// console.log(Person.aaa());

//父类
//子类

//继承

// //父类
// function Person(name){
//     this.name = name
// }
// Person.prototype.showName = function(){
//     return "you_name_"+this.name
// }

// //子类
// function Student(name, skill){
//     Person.call(this, name);
//     this.skill = skill;
// }
// Student.prototype = new Person();

// let st1 = new Student('stuve','taoxu')
// console.log(st1);
// console.log(st1.showName())




// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         return "this is :  "+this.name
//     }
//     static aaa(){
//             return '这是静态方法'
//     }
// }

// class Student extends Person{
//     constructor(args){
//        super(args);
//     }  
//     commit() {
//         return "commit"
//     }
//     revert() {
//         return 'revert'
//     }
// }




// let p = new Person('chinese')
// let st = new Student('dezhu',"run away");
// console.log(st);
// console.log(st.showName());
// console.log(st.commit());
// console.log(st.revert());

// console.log(p);
// console.log(p.showName());



// console.log(Person.aaa());
// console.log(Student.aaa());

// console.log(Person.prototype);
// console.log(Student.prototype);





// class Point{
//     constructor(x,y){
//         this.x =x;
//         this.y =y;
//         console.log(new.target.name);
//     }
//     static hello(){
//         console.log('hello world')
//     }
// }

// class ColorPoint extends Point{
//     constructor(x,y,color){
//         super(x,y);
//         this.color = color//
//     }
// }

// let cp = new ColorPoint(25,8,'green');
// ColorPoint.hello();
// new Point();
// new ColorPoint();

// console.log(cp instanceof ColorPoint);
// console.log(cp instanceof Point);









// let p1 = new Person('strive',18);
// console.log(p1);
// let {showName }= p1;
// console.log(showName())

// let p2 = new Person('strwwwive',183);
// console.log(p2);

//矫正this
//fn.call()
//fn.apply()
//fn.bind()
//

//属性名可以尽量放表达式

//类并没有提升的功能
//定义完了之后才可以使用
//es5可以使用函数模拟

// //声明式语法
//  const person = class{
//     constructor(name,age){
//         //构造方法（函数）
//         //调用new ,自动执行
//         this.name = name;
//         this.age = age;
//         console.log("构造函数"+this.name+"____"+this.age)
//     }
//     showName(){
//         return 'welcome'+this.name
//     }
//     showName(){
//         return 'welcome'+this.age
//     }
// }
// let p2= new person('strive',18);
// console.log(p2);























    }
    render() {
        return (
            <div className="foot">
                <h1>you are ClassComponent</h1>
            </div>
        );
    }
}

export default ClassComponent;
