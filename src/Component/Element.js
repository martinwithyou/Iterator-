import React, { Component } from 'react';
//import { Carousel ,Collapse, DatePicker, Button, Upload} from 'element-react';
import 'element-theme-default';

class ElementComponent extends Component {
  componentWillMount() {
  


  }
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  
  handlePreview(file) {
    console.log(file);
  }
  render() {
    const activeName = "18";
    const fileList2 = [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
      ];
    return (
        <div className="foot">
            <h1>you are ElementComponent</h1>
            
                {/* <Collapse value={activeName}>
                    <Collapse.Item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </Collapse.Item>
                    <Collapse.Item title="反馈 Feedback" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </Collapse.Item>
                    <Collapse.Item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </Collapse.Item>
                    <Collapse.Item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </Collapse.Item>
                </Collapse> */}

                {/* <div className="demo-2 medium">
                    <Carousel indicatorPosition="outside">
                    {
                        [1,2,3,4].map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <h3>{item}</h3>
                                </Carousel.Item>
                            )
                        })
                    }
                    </Carousel>
                </div> */}

                {/* <DatePicker
                    isShowTime={true}
                    placeholder="选择日期"
                    onChange={date=>{
                        console.debug('DatePicker1 changed: ', date)
                        this.setState({value1: date})
                    }}
                    disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                /> */}


                {/* <Upload
                    className="upload-demo"
                    action="//jsonplaceholder.typicode.com/posts/"
                    onPreview={file => this.handlePreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    fileList={fileList2}
                    listType="picture"
                    tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                >
                    <Button size="small" type="primary">点击上传</Button>
                </Upload> */}


        </div>
    );
}
}

export default ElementComponent;
