import React, { Component } from 'react';

class ArrayBuffer extends Component {
    componentWillMount() {

        //ArrayBuffer对象代表储存二进制数据的一段内存，
        //它不能直接读写，
        //只能通过视图（TypedArray视图和DataView视图)来读写，
        //视图的作用是以指定格式解读二进制数据。
        //ArrayBuffer也是一个构造函数，
        //可以分配一段可以存放数据的连续内存区域。
       
        // const buf = new ArrayBuffer(32);
        // console.log(buf)
        // const buffer = new ArrayBuffer(12);

        // const x1 = new Int32Array(buffer);
        // x1[0] = 1;
        // const x2 = new Uint8Array(buffer);
        // x2[0]  = 2;
        // x1[0] // 2
        //ArrayBuffer对象、
        //TypedArray视图
        //和DataView视图是 JavaScript 操作二进制数据的一个接口。
        //这些对象早就存在，
        //属于独立的规格（2011 年 2 月发布），
        //ES6 将它们纳入了 ECMAScript 规格，
        //并且增加了新的方法。
        //它们都是以数组的语法处理二进制数据，
        //所以统称为二进制数组。

        //这个接口的原始设计目的，
        //与 WebGL 项目有关。
        //所谓 WebGL，就是指浏览器与显卡之间的通信接口，
        //为了满足 JavaScript 与显卡之间大量的、
        //实时的数据交换，
        //它们之间的数据通信必须是二进制的，
        //而不能是传统的文本格式。
        //文本格式传递一个 32 位整数，
        //两端的 JavaScript 脚本与显卡都要进行格式转化，
        //将非常耗时。
        //这时要是存在一种机制，
        //可以像 C 语言那样，
        //直接操作字节，将 4 个字节的 32 位整数，
        //以二进制形式原封不动地送入显卡，
        //脚本的性能就会大幅提升。

        //二进制数组就是在这种背景下诞生的。
        //它很像 C 语言的数组，
        //允许开发者以数组下标的形式，
        //直接操作内存，
        //大大增强了 JavaScript 处理二进制数据的能力，
        //使得开发者有可能通过 JavaScript 
        //与操作系统的原生接口进行二进制通信。

        //二进制数组由三类对象组成。

        //（1）ArrayBuffer对象：代表内存之中的一段二进制数据，
        //可以通过“视图”进行操作。
        //“视图”部署了数组接口，
        //这意味着，可以用数组的方法操作内存。

        //（2）TypedArray视图：共包括 9 种类型的视图，
        //比如Uint8Array（无符号 8 位整数）数组视图,
        // Int16Array（16 位整数）数组视图, 
        //Float32Array（32 位浮点数）数组视图等等。

        //（3）DataView视图：可以自定义复合格式的视图，
        //比如第一个字节是 Uint8（无符号 8 位整数）、
        //第二、三个字节是 Int16（16 位整数）、
        //第四个字节开始是 Float32（32 位浮点数）等等，
        //此外还可以自定义字节序。

       //简单说，ArrayBuffer对象代表原始的二进制数据，
       //TypedArray视图用来读写简单类型的二进制数据，
       //DataView视图用来读写复杂类型的二进制数据。

       //注意，二进制数组并不是真正的数组，而是类似数组的对象。
       //很多浏览器操作的 API，用到了二进制数组操作二进制数据，
       //下面是其中的几个。

       //File API
       //XMLHttpRequest
       //Fetch API
       //Canvas
       //WebSockets


    }
    render() {
        return (
            <div className="foot">
                <h1>you are ArrayBuffer </h1>
            </div>
        );
    }
}
export default ArrayBuffer;