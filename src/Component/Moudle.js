import React, { Component } from 'react';

class MoudleComponent extends Component {
componentWillMount() {
  //导出模块
  //export

  //引入模块化
  //import
  //后面可以引入相对路径
  //也可以引入绝对路径
  //引入模块只会引入加载一次
  //import
  //可以引入cdn路径的第三方文件
  //import
  //可以解构赋值{a,b,c}
  
  //导入
  //导出
  //可以给导入导出的模块，起别名

  //export default导出的模块
  //import 不需要{}
  //别的导入都需要{}

  //import有提升的效果
  //会优先加载
  //导出的内容更改
  //引入的内容也会更改

  //import 类似于 node里面的require
  //可以动态引入
  //import不能引入for循环，if判断条件
  //import('./a.js').then(res=>{
  //  console.log(a);
  //});
  //优点
  //按需要加载
  //可以写在if判断条件语句
  //路径可以是动态的

//   async function main(){
//       const mode1 = await import('./modules/1.js')
//       const mode2 = await import('./modules/2.js')
//       console.log(mode1,mode2);
//       const [m1,m2] = await Promise.all([
//           import('./modules/1.js'),
//           import('./modiles/2.js')
//       ]);
//       console.log(m1,m2);
//   }
//   main();

//es6 默认就是严格模式

}
render() {
    return (
      <div className="foot">
          <h1>you are MoudleComponent</h1>
      </div>
    );
}
}


const a =11

export {
    MoudleComponent,
    a as aaa
} 



