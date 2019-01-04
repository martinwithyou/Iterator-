import React, { Component } from 'react';

class StringComponent extends Component {
   componentWillMount() {
  
    //字符串Unicode表示法
    //alert('\u0061')

    //codePointAt()
    // var s = "𠮷";
    // console.log(s.length);
    // console.log(s.charAt(0));
    // console.log(s.charAt(1));
    // console.log(s.charCodeAt(0));
    // console.log(s.charCodeAt(1));

    // let s = '𠮷a';
    // console.log(s.codePointAt(0));
    // console.log(s.codePointAt(1));
    // console.log(s.codePointAt(2));

    // console.log(s.codePointAt(0).toString(16));
    // console.log(s.codePointAt(1).toString(16));
    // console.log(s.codePointAt(2).toString(16));

   
    // for (let ch of s) {
    //     console.log(ch.codePointAt(0).toString(16));
    // }

    //String.fromCodePoint()
    //console.log(String.fromCodePoint(0x78,0x1f680,0x79));

    //for....of
    // for(let codePoint of 'foo'){
    //     console.log(codePoint)
    // }

    // let text =String.fromCodePoint(0x20BB7)
    // for(let i of text){
    //     console.log(i)
    // }

    //includes(), startsWith(), endsWith()
    // let s = 'Hello world!';
    // console.log(s.startsWith('Hello'))
    // console.log(s.endsWith('!'))
    // console.log(s.includes('o'))

    // 这三个方法都支持第二个参数，表示开始搜索的位置。
    // console.log(s.startsWith('Hello',6))
    // console.log(s.endsWith('!',0))
    // console.log(s.includes('o',9))

    //repeat

    // console.log("hello____".repeat(8.9) );
    // console.log("hello____".repeat(-8) );
    // console.log("hello____".repeat(-9) );
    // console.log("hello____".repeat(NaN) );
    // console.log("hello____".repeat('na') );
    // console.log("hello____".repeat('3') );


    //padStart() padEnd()
    // console.log('x'.padStart(5,'ab'));
    // console.log('x'.padStart(4,'ab'));
    // console.log('x'.padEnd(5,'ab'));
    // console.log('x'.padEnd(4,'ab'))

    // console.log('12'.padStart(10, 'YYYY-MM-DD'));
    // console.log('09-12'.padStart(10, 'YYYY-MM-DD'));

    // console.log('1'.padStart(10, '0') );
    // console.log('12'.padStart(10, '0') );
    // console.log('123456'.padStart(10, '0'));

    //matchAll()
    //返回一个正则表达式在当前字符串所有的匹配

    //模版字符串
    // let x = 1;
    // let y = 2;

    // console.log(`${x} + ${y} = ${x + y}`)
    // // "1 + 2 = 3"

    // console.log(`${x} + ${y * 2} = ${x + y * 2}`)
    //  // "1 + 4 = 5"

    // let obj = {x: 1, y: 2};
    // console.log(`${obj.x + obj.y}`);
    // // "3"

    // function fn(){
    //     return "hello world"
    // }
    // console.log(`f00_${fn()}_bar`)

    //模版编译字符串
    // let template = `
    //     <ul>
    //     <% for(let i=0; i < data.supplies.length; i++) { %>
    //     <li><%= data.supplies[i] %></li>
    //     <% } %>
    //     </ul>
    // `;

    //标签模版字符串

   }
    render() {
        return (
            <div className="foot">
                <h1>you are string </h1>
            </div>
        );
    }
}

export default StringComponent;
