import React, { Component } from 'react';

class PrimaryAlgorithm extends Component {
    componentWillMount() {

        // let removeDuplicates = function(nums) {
    
        //     let demo = [];
           
        //     for(let i=0;i<nums.length;i++){

        //         //console.log(nums[i]);

        //         if( demo.includes( nums[i] ) ){
        //             //return
        //         }else{
        //             demo.push(nums[i])
        //         }
        //     }
           
        //    return demo
        // };

        // console.log( removeDuplicates([1,1,1,1,1,4,444,4,4,4,4,4,4,4,4,45]) )

        // let arr = [1,2,3,4,5,6,7];
        // let k = 3;
        // for(var i=arr.length-1; i>-1; i--){
        //     // console.log(arr[i] = arr[i-k]);
        //     if(i>=k){

        //         arr[i] = arr[i-k];

        //     }else if(i<k){

        //         //arr[i] = arr[ arr.length -  (k-i+1) ];
        //         console.log(i)

        //     }
        // }
        // console.log(arr)

        // var rotate = function(nums, k) {
        //     for(var i=0;i<k;i++){
        //         var dd=nums.pop();
        //         nums.unshift(dd);
        //     }
        // };
        // console.log([1,2,3,4,5,6,7],3);

        // var containsDuplicate = function(nums) {
        //     let demo = []
        //     let flag = false;
        //     nums.map((item ,index)=>{
        //         console.log("item____",item);
        //         console.log("index____",index);
        //         demo.push(item);
        //         for(let i =index+1;i<nums.length;i++){
        //             if( demo.includes( nums[i] ) ){
        //                 flag = true
        //             }
        //         }

        //     });
        //     return flag
        // };
        // let res = containsDuplicate([1,2,3,4,5,6,7,8]);
        // console.log(res);
 



    }
    render() {
        return (
            <div className="foot">
                <h1>you are PrimaryAlgorithm</h1>
            </div>
        );
    }
}

export default PrimaryAlgorithm;
