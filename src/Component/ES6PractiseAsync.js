import React, { Component } from 'react';

class ES6PractiseAsync extends Component {
    componentWillMount() {
  
        // function resolveAfter2Seconds(){
        //     return new Promise(resolve=>{
        //         setTimeout(()=>{
        //             resolve("resolve")
        //         },2000);
        //     });
        // }

        // async function asyncCall(){
        //     console.log('calling');
        //     var result = await resolveAfter2Seconds();
        //     console.log(result)
        // }

        //asyncCall();

        // async function asyncCall(){
        //     console.log("start");
        //     var resolut = await resolveAfter2Seconds();
        //     console.log(resolut)
        // }

        // asyncCall();

        var resolveAfter2Seconds = function(){
            console.log('starting slow promise');
            return new Promise(resolve =>{
                setTimeout(function(){
                   resolve(20);
                   console.log('slow promise is done');
                },2000)
            })
        }

        var resolveAfter1Seconds = function(){
            console.log("starting fast promise");
            return new Promise(resolve=>{
                setTimeout(function(){
                   resolve(10);
                   console.log('fast promise is done')
                },1000)
            });
        }

        var sequentialStart = async function(){
            console.log('==sequential start==');
            const slow = await resolveAfter2Seconds();

            const fast =await resolveAfter1Seconds();
            console.log(slow);
            console.log(fast);
        }

        //sequentialStart();

        var stillSerial = function(){
            console.log('==CONCURRENT START with Promise.all ===');
            Promise.all([resolveAfter2Seconds(),resolveAfter1Seconds()]).then(([slow, fast])=>{
               console.log(slow);
               console.log(fast)
            });
        }

        //stillSerial();

        var parallel = function(){
            console.log('==PARALLEL with Promise.then==');
            resolveAfter2Seconds().then((message)=>console.log(message));
            resolveAfter1Seconds().then((message)=>console.log(message));
        }

        //parallel();

        const getJSON = function(url){
            const promise = new Promise(function(resolve,reject){
                const handler = function(){
                    if(this.readyState !== 4){
                        return;
                    }
                    if(this.status === 200){
                        resolve(this.response)
                    }else{
                        reject(new Error(this.statusText));
                    }
                };
                const client = new XMLHttpRequest();
                client.open('GET', url);
                client.onreadystatechange=handler;
                client.responseType ='json';
                client.setRequestHeader('Accept','application/json');
                client.send();
            });
            return promise;
        }

        // getJSON('/posts.json').then(function(json){
        //     console.log("content:"+json)
        // },function(error){
        //     console.log(error)
        // });












    }
    render() {
        return (
            <div className="foot">
                <h1>you are ES6PractiseAsync</h1>
            </div>
        );
    }
}

export default ES6PractiseAsync;
