import React from 'react';
import './App.css';
import {BrowserRouter,HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import User from './pages/User'
import NoMatch from "./pages/404";
import About from "./pages/About";
import Login from "./pages/login";
import Auth from "./utils/auth";

//高阶组件
function PrivateRoute({component:Comp,...rest}) {
  return(
      <Route {...rest}
             render={(props)=>
                 Auth.isAuth?
                     (<Comp {...props}/>):
                     (<Redirect to={{
                       pathname:'/login',
                       state:{
                         form:props.location
                       }
                     }}/>)}>
      </Route>
  )
}

function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/course'>课程</Link></li>
        <li><Link to='/user'>用户</Link></li>
        <li><Link to='/about'>关于</Link></li>
      </ul>

    {/*  路由配置*/}
    {/*exact加上之后，精准匹配*/}
    {/*Switch组件*/}
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route path='/course' component={Course}/>
      <Route path='/user' component={User}/>
      <PrivateRoute path='/about' component={About}/>
      <Route path='/login' component={Login}/>
      <Redirect to='/home'/>
      <Route component={NoMatch}/>
    </Switch>
    </HashRouter>
  );
}

export default App;
