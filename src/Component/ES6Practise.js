import React, { Component } from 'react';

class ES6Practise extends Component {
    componentWillMount() {
  
        function runAsync1(){
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                   console.log("异步任务_1_执行完成");
                   resolve("随便写的数据_1")
                },3000);
            })
            return p;
        }

        function runAsync2(){
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                    console.log("异步任务_2_执行完成");
                    resolve("随便写的数据_2")
                },3000)
            })
            return p;
        }

        function runAsync3(){
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                    console.log("异步任务_3_执行完成");
                    resolve("随便写的数据_3")
                },3000)
            })
            return p;
        }

        // runAsync1().then(function(data){

        //    console.log(data);
        //    console.log("第一个异步函数执行结束")
        //    return runAsync2();

        // }).catch(function(reason){

        //     console.log('rejected');
        //     console.log(reason);

        // }).then(function(data){

        //     console.log(data);
        //     console.log("第二个异步函数执行结束")
        //     return runAsync3();

        // }).catch(function(reason){

        //     console.log('rejected');
        //     console.log(reason);

        // }).then(function(data){

        //     console.log(data);
        //     console.log("第二个异步函数执行结束")
        // }).catch(function(reason){

        //     console.log('rejected');
        //     console.log(reason);

        // });


    }
    render() {
        return (
            <div className="foot">
                <h1>you are ES6Practise about promise</h1>
            </div>
        );
    }
}

export default ES6Practise;
