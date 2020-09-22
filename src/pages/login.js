import React from "react";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin:false
        }
    }

    render() {
        return(
            <div>登录组件</div>
        )
    }
}
export default Login