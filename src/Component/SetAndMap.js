import React, { Component } from 'react';

class SetAndMap extends Component {
  componentWillMount() {
  
    //ES6提供了新的数据结构set
    //它类似于数组
    //但成员都是唯一的
    //没有重复的
    // const s = new Set();
    // [2,3,4,5,4,3,2,1].forEach( x => s.add(x));
    // for(let i of s){
    //  console.log(i);
    // }

    // const set = new Set([1,2,3,4,5,5,5,5,5,5,5]);
    // console.log([...set])

    // const items = new Set([1,2,3,4,5,5,5]);
    // console.log(items.size);

    // // 例三
    // const set = new Set(document.querySelectorAll('div'));
    //  // 56
    // console.log(set.size)

    // 类似于
    // const set = new Set();
    // document
    // .querySelectorAll('div')
    // .forEach(div => set.add(div));

    // let set = new Set();
    // let a = NaN;
    // let b = NaN;
    // set.add(a);
    // set.add(b);
    // console.log(set)

    //  
    // set.add({});
    // set.add({});
    // console.log(set)

    //set的实例的属性和方法
    // let set = new Set();
    // set.add(1).add(2).add(2);
    // console.log(set.size)
    // console.log(set.has(1));

    //遍历操作
    // let set = new Set(['red', 'green', 'blue']);

    // for (let item of set.keys()) {
    //     console.log(item);
    // }

    // for (let item of set.values()) {
    //     console.log(item);
    // }

    // for (let item of set.entries()) {
    //     console.log(item);
    // }

    // let set = new Set([1,4,9]);
    // set.forEach( (value,key) => console.log(key+':'+value)) 

    // let set = new Set(['red', 'green', 'blue']);
    // let arr = [...set];
    // console.log(arr)

    // let arr = [3, 5, 2, 2, 5, 5];
    // let unique = [...new Set(arr)];
    // console.log(unique)

    // let set = new Set([1,2,3]);
    // set = new Set([...set].map(x=>x*2));
    // console.log(set)

    // let set = new Set([1,2,3,4,5]);
    // set = new Set([...set].filter(x=>(x%2)==0));
    // console.log(set);

    //因此使用 Set 可以很容易地实现并集（Union）、
    //交集（Intersect）和差集（Difference）。

    // //并集
    // let a = new Set([1,2,3]);
    // let b = new Set([4,3,2]);
    // // let union = new Set([...a,...b]);
    // // console.log(union);

    // //交集
    // let intersect = new Set( [...a].filter(x => b.has(x)));
    // console.log(intersect);

    // //差集
    // let difference = new Set([...a].filter(x => !b.has(x)));
    // console.log(difference);

    // // 方法一
    // let set = new Set([1, 2, 3]);
    // set = new Set([...set].map(val => val * 2));
    // // set的值是2, 4, 6

    // // 方法二
    // let set = new Set([1, 2, 3]);
    // set = new Set(Array.from(set, val => val * 2));
    // // set的值是2, 4, 6

    //WeakSet的成员只能是对象，不能是其他类型
    // const ws = new WeakSet();
    // ws.add(1);

    
    // const a =[ [1,2],[3,4]];
    // const ws = new WeakSet(a);
    // console.log(ws)

    // const ws = new WeakSet();
    // const obj = {};
    // const foo = {};

    // ws.add(window);
    // ws.add(obj);

    // ws.has(window); // true
    // ws.has(foo);    // false

    // ws.delete(window);
    // ws.has(window);    // false

    // WeakSet 没有size属性，没有办法遍历它的成员
    // WeakSet 不能遍历，是因为成员都是弱引用，
    // 随时可能消失，遍历机制无法保证成员的存在，
    // 很可能刚刚遍历结束，成员就取不到了。
    // WeakSet 的一个用处，是储存 DOM 节点，
    // 而不用担心这些节点从文档移除时，会引发内存泄漏。

    //Map
    //它类似于对象，也是键值对的集合，
    //但是“键”的范围不限于字符串，
    //各种类型的值（包括对象）都可以当作键

    // const m = new Map();
    // const o = {p:'hello,world'};
    // m.set(o,'content');
    // console.log(m.get(o))
    // console.log(m.has(o));
    // console.log(m.delete(o));
    // console.log(m.has(o));

    // const map = new Map();

    // map.set(1, 'aaa').set(1, 'bbb');

    // console.log(map.get(1) )// "bbb"

    // const map = new Map();

    // const k1 = ['a'];
    // const k2 = ['a'];

    // map.set(k1, 111).set(k2, 222);

    // console.log( map.get(k1) ) // 111
    // console.log( map.get(k2) ) // 222

    // let map = new Map();

    // map.set(-0, 123);
    // console.log(map.get(+0) )// 123

    // map.set(true, 1);
    // map.set('true', 2);
    // console.log( map.get(true)) // 1

    // map.set(undefined, 3);
    // map.set(null, 4);
    // console.log( map.get(undefined) )// 3

    // map.set(NaN, 123);
    // console.log(map.get(NaN) )// 123

    //实例的属性和操作方法
    //size
    //set(key,  value)
    //get(key)
    //has(key)
    //delete(key)
    //clear()

    //Map 结构原生提供三个遍历器生成函数和一个遍历方法。

    //keys()：返回键名的遍历器。
    //values()：返回键值的遍历器。
    //entries()：返回所有成员的遍历器。
    //forEach()：遍历 Map 的所有成员。
    // const map = new Map([
    //     ['F', 'no'],
    //     ['T',  'yes'],
    //   ]);
      
    //   for (let key of map.keys()) {
    //     console.log(key);
    //   }
    //   // "F"
    //   // "T"
      
    //   for (let value of map.values()) {
    //     console.log(value);
    //   }
    //   // "no"
    //   // "yes"
      
    //   for (let item of map.entries()) {
    //     console.log(item[0], item[1]);
    //   }
    //   // "F" "no"
    //   // "T" "yes"
      
    //   // 或者
    //   for (let [key, value] of map.entries()) {
    //     console.log(key, value);
    //   }
    //   // "F" "no"
    //   // "T" "yes"
      
    //   // 等同于使用map.entries()
    //   for (let [key, value] of map) {
    //     console.log(key, value);
    //   }
    //   // "F" "no"
    //   // "T" "yes"

    // const map = new Map([
    //     [1,'one'],
    //     [2,'two'],
    //     [3,'three']
    // ])
    // console.log([...map.keys()])
    // console.log([...map.values()])
    // console.log([...map.entries()])

    //与其他数据结构的互相转换
    // const myMap = new Map().set(true,7).set({foo:3},['abc']);
    // console.log([...myMap])

    //Map转换为对象
    //对象转换为Map
    //Map转换JSON
    //JSON转换Map

    //WeakMap结构和map结构类似
    //但是只接受对象做键值
    // const wm1 = new WeakMap();
    // const key = {foo:1};
    // wm1.set(key,2);
    // console.log( wm1.get(key) );
    // WeakMap 也可以接受一个数组，
    // 作为构造函数的参数
    // const k1 = [1, 2, 3];
    // const k2 = [4, 5, 6];
    // const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
    // wm2.get(k2)

    //WeakMap 的语法 § ⇧
    //WeakMap 与 Map 在 API 上的区别主要是两个，
    //一是没有遍历操作（即没有keys()、values()和entries()方法），
    //也没有size属性。
    //因为没有办法列出所有键名，某个键名是否存在完全不可预测，
    //跟垃圾回收机制是否运行相关。这一刻可以取到键名，
    //下一刻垃圾回收机制突然运行了，这个键名就没了
    //，为了防止出现不确定性，就统一规定不能取到键名。
    //二是无法清空，即不支持clear方法。
    //因此，WeakMap只有四个方法可用：
    //get()、set()、has()、delete()。
    
  }
  render() {
        return (
            <div className="foot">
                <h1>you are SetAndMap </h1>
            </div>
        );
  }
}

export default SetAndMap;
