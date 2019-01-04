import React, { Component } from 'react';

class StackComponent extends Component {
    componentWillMount() {
        //栈结构概念
        //栈底
        //栈顶
        //栈内数据后进先出
        //入栈 push()
        //出栈 pop()
        //栈顶 peek()
        //js实现栈结构--数组
        //[0,1,2,4,5]
        //栈底       
        //栈顶
        
        // let a = [1, 2,3,4,5];
        // a.push(8);
        // console.log(a);
        // a.pop();
        // console.log(a);

        // var Stack =function(){
        //     let items = [];
        //     this.push = function(elemenr){
        //         items.push(element)
        //     }
        // }
        // let stack = new Stack([1,2,3]);
        // console.log( stack )

        //不改变原来数组，改变新的数组
        //concat()
        //join()
        //slice()
        //map()
        //every()
        //some()
        //filter()

        //改变原来数组
        //forEach()
        //pop()
        //push()
        //reverse()
        //shift()
        //unshift()
        //sort()
        //splice()

        //遍历数组
        //for....in...
        //for...of...

        //new Map创建一个map
        // let map = new Map( [ [1,'one'], [2,'two'],[3,'three']])
        // map.set(4,'four');

        // console.log([...map.keys()]);
        // console.log([...map.values()]);
        // console.log([ ...map ]);

        // const distinct = arr => arr.filter( (element, index, self) => {
        //     return self.indexOf( element ) === index;
        // });
        
        // let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
        // console.log(arr); // [1, 2, 3, 5, 4];

        // const distinct = arr => arr.sort().reduce( (init, current) => {
    
        //     if (init.length === 0 || init[init.length - 1] !== current) {
        //         init.push( current );
        //     }
        //     return init;
        // }, []);
        
        // let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
        // console.log(distinct(arr) ); // [1, 2, 3, 4, 5]

        // function generateFibonaccis(n) {
        //     var fib = [1, 1];
        //     for (var i = 2; i < n; i++) {
        //         fib[i] = fib[i - 2]+ fib[i - 1];
        //     }
        //     return fib;
        // }
        // var fib = generateFibonaccis(10);
        //console.log(fib.join(" "));

        // function fibonaccis(n){
        //     var fib = [1,1];
        //     for(let i =2;i<n;i++){
        //         fib[i]= fib[i-2] + fib[i-1];
        //     } 
        //     return fib
        // }
        // let fib = fibonaccis(100);
        // console.log( fib );

        // function fibonaccis(n){
        //    let fib = [1,1]
        //    for(let i=2; i<n; i++){
        //        fib[i] = fib[i-2] + fib[i-1];
        //    }
        //    return fib
        // }
        // console.log( fibonaccis(300) )

        // function fibonaccis(n){
        //     let fib = [1,1]
        //     for(let i=2;i<n;i++){
        //         fib[i]=fib[i-2] + fib[i-1]
        //     }
        //     return fib
        // }

        // console.log(fibonaccis(200));

        //旋转数组

        // function d(arr,k){
        //     k = arr.length - k;
        //     const a = arr.slice(0,k);
        //     const b = arr.slice(k,arr.length);
        //     return [...b,...a]
        // }
        // console.log(d([1,2,3,4,5,6,7], 3));

        // function d(arr){
        //     let demo = [];
        //     let time = [];
        //     arr.map( (item)=>{
        //         demo.push(item);
        //     });
        //     demo.map( (item)=>{
        //         let index = 0;
        //         if( arr.indexOf(item) ){
        //           index++;
        //           time.push(index)
        //         }
        //     })
        // }
        
        // d([1,2,3,4,5,4,3,2,1])
        // const arr = [1,2,3,4,5,4,3,2,1];
        // let a = arr.reduce((prev,now)=>( prev[now]++ || (prev[now]=1),prev),{} );
        // console.log(a);

        //判断只出现一次的值
        // let arr = [1,2,3,4,5,4,3,2,1];
        // let count = arr.reduce((prev,now)=>{
        //     now in prev ? prev[now]++ : prev[now] = 1;
        //     console.log(prev,now)
        //     return prev
        //   },{});

        // console.log(count)

    //两个数组的交集
    //     function d(nums1, nums2){
    //         let arr=[];
    //         nums1.map((item)=>{
    //             nums2.map( (inner)=>{
    //                 if(item === inner){
    //                     arr.push(inner)
    //                 }
    //             });
    //         })
    //         return arr
    //     }

    //    let a = d([1,2,3,4,5], [2,3,4])
    //    console.log(a);

    //数组中的最大值
    // function d(arr){
    //     let most = 0;
    //     arr.map((item)=>{
    //         if(item > most){
    //             most=item
    //         }
    //     });
    //     return most
    // }
    // let a = d([1,2,3,4,5,6,7,8,9,20]);
    // console.log(a);


    // //移动零
    // function c(arr){
    //     let b=[];
    //     let a =[]
    //     arr.map((item)=>{
    //         if(item !== 0){
    //             a.push(item)
    //         }
    //         if(item === 0){
    //             b.push(item)
    //         }
    //     })
    //     let c =a.concat(b);

    //     return c
    // }

    // console.log( c([0,0,1,2,3,4,5]) );


    // //加一
    // function d(num){
    //     let str=num+'';
    //     let arr=str.split('');
    //     let newArr=[];
    //     arr.map((item, index)=>{
    //         console.log(index)
    //         if(index === arr.length-1 ){
    //             item = Number(item)+1;
    //         }
    //         newArr.push(Number(item));
    //     });
    //     return newArr
    // }
    // console.log( d(123) );

    // //两数之和
    // function d(arr,num){
    //     let arrIndex=[];
    //     arr.map((item,index)=>{
    //         arr.map((innerItem, innerIndex)=>{
    //             if(num === item+innerItem && index !== innerIndex){
    //                 if( !arrIndex.includes(index)){
    //                     arrIndex.push(index)
    //                 }
    //                 //console.log(arrIndex)
    //                 //console.log(innerIndex)
    //             }
    //         })
    //     })
    //     return arrIndex
    // }
    // let res = d([2,7,11,15],9);
    // console.log(res)

    // //有效的数组
    // function d(arr1,arr2){
    //     arr1.map( (item,index)=>{
           
    //         arr2.map((innderItem, innerIndex)=>{
    //             innderItem = "*"
    //             return innderItem;
    //         });

    //         console.log(arr2)
    //     });
    // }
    // d([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9] );

    //旋转图像
    // function f(arr){
    //     console.log(arr)
    // }
    // f([
    //     [7,4,1],
    //     [8,5,2],
    //     [9,6,3]
    //   ]);



    }
    render() {
        return (
            <div className="foot">
                <h1>you are StackComponent</h1>
            </div>
        );
    }
}

export default StackComponent;
