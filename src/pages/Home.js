import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
                首页
                <h3>{this.props.location.state?this.props.location.state.foo:''}</h3>
            </div>
        )
    }
}
export default Home