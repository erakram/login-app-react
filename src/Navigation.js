import React, { Component } from 'react';
// import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';
class Navigation extends Component {
 render() {
   return (
     <Router>
       {/* <div className="container"> */}
         {/* <div className="row"> */}
         {/* <button type="button" class="btn btn-success">Success</button> */}

         {/* <div className="nav-wrapper">
             <NavLink to="/">Home</NavLink>
         
             {this.props.authenticated ? (
               <span>
                 <NavLink to="/dashboard">Dashboard</NavLink>
                 <Logout />
               </span>
             ) : (
               <span>
                 <NavLink to="/login">Login</NavLink>
                 <NavLink to="/signup">Register</NavLink>
               </span>
             )}
             </div> */}
             <div>
             <nav className ="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className ="navbar-nav">
                <li className ="nav-item">
                  <a className ="nav-link" href="/">Home</a>
                </li>
                
                {this.props.authenticated ? (
               <span>
                 
                <li className ="nav-item">
                  <a className ="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                  <Logout />
                </li>
                
                </span> 
                ) : (
                  <span>
                     <li className ="nav-item">
                        <a className ="nav-link" href="/login">Login</a>
                     </li>
                     <li className ="nav-item">
                        <a className ="nav-link" href="/signup">Register</a>
                     </li>
                  </span>
                )}
              </ul>
              </nav>
              </div>
             {/* </div> */}
             
           
          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
       {/* </div> */}
     </Router>
   );
 }
}
export default Navigation;