import React from "react";

class CourseDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    back=()=>{
        this.props.history.goBack()
    }

    goHome=()=>{
        this.props.history.push({
            pathname:'/',
            state:{
                foo:'bar'
            }
        })
    }

    render() {
        //location:本地信息对象
        //match:匹配的路由信息对象
        //history:
        const {location,match,history}=this.props;
        console.log('match',match);
        return(
            <div>
                课程{match.params.courseName}
                <button onClick={this.back}>返回</button>
                <button onClick={this.goHome}>跳转首页,并携带值</button>

            </div>

        )
    }
}

export default CourseDetail