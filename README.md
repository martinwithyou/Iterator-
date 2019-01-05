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

对于新人来说，JavaScript的原型是一个很让人头疼的事情，一来prototype容易与__proto__混淆，二来它们之间的各种指向实在有些复杂，其实市面上已经有非常多的文章在尝试说清楚，有一张所谓很经典的图，上面画了各种线条，一会连接这个一会连接那个，说实话我自己看得就非常头晕，更谈不上完全理解了。所以我自己也想尝试一下，看看能不能把原型中的重要知识点拆分出来，用最简单的图表形式说清楚。

我们知道原型是一个对象，其他对象可以通过它实现属性继承。但是尼玛除了prototype，又有一个__proto__是用来干嘛的？长那么像，让人怎么区分呢？它们都指向谁，那么混乱怎么记啊？原型链又是什么鬼？相信不少初学者甚至有一定经验的老鸟都不一定能完全说清楚，下面用三张简单的图，配合一些示例代码来理解一下