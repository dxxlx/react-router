import React from "react";
import {Link,Route} from 'react-router-dom'
import CourseDetail from "./CourseDetail";
import CourseIndex from "./CourseIndex";

class Course extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
                {/*定义二级路由*/}
                <ul>
                    <li><Link to={`${this.props.match.url}/vue`}>Vue</Link></li>
                    <li><Link to='/course/react'>react</Link></li>
                    <li><Link to='/course/angular'>angular</Link></li>
                </ul>
                {/*二级路由配置*/}
                <Route path='/course/:courseName' component={CourseDetail}></Route>
                <Route exact path={this.props.match.path} component={CourseIndex}></Route>
            </div>
        )
    }
}

export default Course