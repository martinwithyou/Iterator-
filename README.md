## Available Scripts
### `Iterator（遍历器）的概念`

JavaScript 原有的表示“集合”的数据结构，
主要是数组（Array）和对象（Object），
ES6 又添加了Map和Set。
这样就有了四种数据集合，
用户还可以组合使用它们，
定义自己的数据结构，
比如数组的成员是Map，
Map的成员是对象。
这样就需要一种统一的接口机制，
来处理所有不同的数据结构。

### `Iterator 接口`
遍历器（Iterator）就是这样一种机制。
它是一种接口，
为各种不同的数据结构提供统一的访问机制。
任何数据结构只要部署 Iterator 接口，
就可以完成遍历操作（即依次处理该数据结构的所有成员）。

### `Iterator 的作用`
Iterator 的作用有三个：
一是为各种数据结构，
提供一个统一的、简便的访问接口；
二是使得数据结构的成员能够按某种次序排列；
三是 ES6 创造了一种新的遍历命令for...of循环，
Iterator 接口主要供for...of消费。

### `Iterator 的遍历过程是这样的`
（1）创建一个指针对象，指向当前数据结构的起始位置。
    也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，
    可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，
    指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，
    直到它指向数据结构的结束位置。

每一次调用next方法，都会返回数据结构的当前成员的信息。
具体来说，就是返回一个包含value和done两个属性的对象。
其中，value属性是当前成员的值，done属性是一个布尔值，
表示遍历是否结束。

下面是一个模拟next方法返回值的例子。

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}

##上面代码中，对象obj是可遍历的（iterable），因为具有Symbol.iterator属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有next方法。每次调用next方法，都会返回一个代表当前成员的信息对象，具有value和done两个属性。

##ES6 的有些数据结构原生具备 Iterator 接口（比如数组），即不用任何处理，就可以被for...of循环遍历。原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），另外一些数据结构没有（比如对象）。凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。

##原生具备 Iterator 接口的数据结构如下。

##Array
##Map
##Set
##String
##TypedArray
##函数的 arguments 对象
##NodeList 对象
##Note: this is a one-way operation. Once you `eject`, you can’t go back!**
 ##Learn More

 ##JS原型链简单图解
 JS中原型链，说简单也简单。

首先明确： 函数（Function）才有prototype属性，对象（除Object）拥有__proto__。

首先，我画了一张图。
所谓原型链，指的就是图中的proto这一条指针链！

原型链的顶层就是Object.prototype，而这个对象的是没有原型对象的。

可在chrome的控制台里面输入：

    Object.__proto__
输出是:

    function Empty() {}
原型链，如此而已。

对于新人来说，JavaScript的原型是一个很让人头疼的事情，
一来prototype容易与__proto__混淆，
二来它们之间的各种指向实在有些复杂，
其实市面上已经有非常多的文章在尝试说清楚，
有一张所谓很经典的图，
上面画了各种线条，
一会连接这个一会连接那个，
说实话我自己看得就非常头晕，
更谈不上完全理解了。
所以我自己也想尝试一下，
看看能不能把原型中的重要知识点拆分出来，
用最简单的图表形式说清楚。

我们知道原型是一个对象，
其他对象可以通过它实现属性继承。
但是尼玛除了prototype，
又有一个__proto__是用来干嘛的？
长那么像，让人怎么区分呢？
它们都指向谁，
那么混乱怎么记啊？
原型链又是什么鬼？
相信不少初学者甚至有一定经验的老鸟都不一定能完全说清楚，
下面用三张简单的图，
配合一些示例代码来理解一下.

本文尝试阐述
Js中原型（prototype）、
原型链（prototype chain）等概念及其作用机制。
上一篇文章（图解Javascript上下文与作用域）
介绍了Js中变量作用域的相关概念，
实际上关注的一个核心问题是：
“在执行当前这行代码时Js解释器可以获取哪些变量”，
而原型与原型链实际上还是关于这一问题。

我们知道，
在Js中一切皆为对象（Object），
但是Js中并没有类（class）；
Js是基于原型（prototype-based）
来实现的面向对象（OOP）的编程范式的，
但并不是所有的对象都拥有prototype这一属性：

prototype是每个function定义时自带的属性，
但是Js中function本身也是对象，
我们先来看一下下面几个概念的差别
function、
Function、
Object和{}
function是Js的一个关键词，用于定义函数类型的变量，有两种语法形式：

实际上Function就是一个用于构造函数类型变量的类，
或者说是函数类型实例的构造函数（constructor）；
与之相似有的Object或String、Number等，
都是Js内置类型实例的构造函数。
比较特殊的是Object，
它用于生成对象类型，
其简写形式为{}：

prototype和length是每一个函数类型自带的两个属性，
而其它非函数类型并没有（开头的例子已经说明），
这一点之所以比较容易被忽略或误解，
是因为所有类型的构造函数本身也是函数，
所以它们自带了prototype属性：

除了prototype之外，
Js中的所有对象（undefined、null等特殊情况除外）都有一个内置的[[Prototype]]属性，
指向它“父类”的prototype，
这个内置属性在ECMA标准中并没有给出明确的获取方式，
但是许多Js的实现（如Node、大部分浏览器等）
都提供了一个__proto__属性来指代这一[[Prototype]]，
我们通过下面的例子来说明实例中
的__proto__是如何指向构造函数的prototype的：

    var Person = function(){};
    Person.prototype.type = 'Person';
    Person.prototype.maxAge = 100;

    var p = new Person();
    console.log(p.maxAge);
    console.log(p.type);
    p.name = 'rainy';
    console.log(p.name);

    console.log(Person.prototype.constructor === Person)  //=> true
    console.log(p.__proto__ === Person.prototype)        //=> true
    console.log(p.prototype);

__proto__

Person是一个函数类型的变量，
因此自带了prototype属性，
prototype属性中的constructor又指向Person本身；
通过new关键字生成的Person类的实例p1，
通过__proto__属性指向了Person的原型。
这里的__proto__只是为了说明实例p1在内部实现的时候与父类之间存在的关联（
指向父类的原型），
在实际操作过程中实例可以直接通过.
获取父类原型中的属性，
从而实现了继承的功能。

原型链

清楚了prototype与__proto__的概念与关系之后
我们会对“Js中一切皆为对象”这句话有更加深刻的理解。
进而我们会想到，
既然__proto__是（几乎）所有对象都内置的属性，
而且指向父类的原型，
那是不是意味着我们可以“逆流而上”一直找到源头呢？
我们来看下面的例子

    var Obj = function(){};
    var o = new Obj();
    console.log(o.__proto__ === Obj.prototype) //=> true
    console.log(o.__proto__.constructor === Obj)//=> true

    console.log(Obj.__proto__ === Function.prototype) //=> true
    console.log(Obj.__proto__.constructor === Function) //=> true

    console.log(Function.__proto__ === Function.prototype) //=> true
    console.log(Object.__proto__ === Object.prototype)    //=> false
    console.log(Object.__proto__ === Function.prototype)  //=> true

    console.log(Function.__proto__.constructor === Function)//=> true
    console.log(Function.__proto__.__proto__)               //=> {}
    console.log(Function.__proto__.__proto__ === o.__proto__.__proto__) //=> true
    console.log(o.__proto__.__proto__.__proto__ )


从上面的例子和图解可以看出，prototype对象也有__proto__属性，向上追溯一直到null。
new关键词的作用就是完成上图所示实例与父类原型之间关系的串接，
并创建一个新的对象；i
nstanceof关键词的作用也可以从上图中看出，
实际上就是判断__proto__（以及__proto__.__proto__...）所指向是否父类的原型：














执行上下文（简称上下文）决定了Js执行过程中可以获取哪些变量、函数、数据，一段程序可能被分割成许多不同的上下文，每一个上下文都会绑定一个变量对象（variable object），它就像一个容器，用来存储当前上下文中所有已定义或可获取的变量、函数等。位于最顶端或最外层的上下文称为全局上下文（global context），全局上下文取决于执行环境，如Node中的global和Browser中的window：