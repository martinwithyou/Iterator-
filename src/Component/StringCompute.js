import React, { Component } from 'react';

class StringCompute extends Component {
    componentWillMount() {
 
        //字符串算法
        // function d(str){
        //     let arr = Array.from(str);
        //     arr = arr.reverse();
        //     let itemTotal=""
        //     arr.map((item)=>{
        //        itemTotal += item;
        //     });
        //     console.log(itemTotal)
        // }
        // d('hello');

        // function e(num){
        //     num = num+''
        //     let arr = Array.from(num);
        //     console.log(arr)
        //     arr = arr.reverse();
        //     let itemTotal=""
        //     arr.map((item)=>{
        //        itemTotal += item;
        //     });
        //     console.log(itemTotal)
        // }
        // e(123);

        //字符串中的第一个唯一字符
        // function f(str){
        //     let arr = Array.from(str);
        //     let num=[]
        //     arr.map((item,index)=>{
        //         let num_=1
        //         for(let i=0;i<arr.length;i++){
                    

        //         }
        //     });
        //     console.log(num);
        // }
        // f("leetcode");

        //有效的字母异位词
        // function a(s,t){
        //     let flag = false;
        //     let sArr = Array.from(s);
        //     let tArr = Array.from(t);
        //     console.log(sArr);
        //     console.log(tArr);
        //     if( sArr[0] === tArr[1] && sArr[2] === tArr[3]){
        //         flag = true
        //         // console.log("符合条件。。。")
        //     }
        //     return flag
        // }

        // let res = a('anagram','nagaram');
        // console.log(res);


        //判断回文字符串
        //
        // function r(str){
        //     let arr = Array.from(str);
        //     console.log(arr);
        //     let newLength = parseInt(arr.length/2);
        //     //console.log( newLength );
        //     for(let i=arr.length; i> newLength; i--){
        //         console.log( arr[i] );
        //         for(let j=0;j<newLength;j++){
        //             if(arr[i] == arr[j]){
        //               console.log("这是一句回文。。。")
        //             }
        //         }
        //     }

        // }

        // r("上海自来水来自海上");

        //数字转换
        // function h(str){
        //     console.log(str)
        //     let arr = Array.from(str);
        //     let newArr=[]
        //     arr.map((item,index)=>{
        //         item = Number(item);
        //         console.log(item);
        //         if(item > 0 ){
        //             newArr.push(item)
        //         }
        //     })
        //     return newArr;
        // }
        // let res = h('123rrftet');
        // console.log(res);

        //实现strStr()
        // function h(num1,num2){
        //     let arr1 = Array.from(num1);
        //     let arr2 = Array.from(num2);
        //     arr1.map((item)=>{

        //     //    if(arr2[0] === item){
        //     //     console.log(item);
        //     //    }
        //    })
        // }
        // h('hello', 'll');

        //报数
        //暂时不会做。。。

        //最长公共前缀
        // function d(arr){
        //    arr.map((item)=>{
        //        console.log(item)
        //    })
        // }

        // d( ["flower","flow", "flight"]);











    }
    render() {
        return (
            <div className="foot">
                <h1>you are StringCompute</h1>
            </div>
        );
    }
}

export default StringCompute;
