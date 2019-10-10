import React, { Component } from 'react';
// import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Admin from './Admin';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';
import ProjectDetails from './projects/ProjectDetails'
// import CreateProject from './projects/CreateProject'
import AddUser from './Adduser'
class Navigation extends Component {
 render() {
   return (
     <Router>
       <nav className="nav-wrapper grey darken-3">
         <div className="container">
           <Link to="/" className="brand-logo">Tech</Link>
           <ul className="right">
           {this.props.authenticated ? (
            <span>
             <li><NavLink to="/dashboard">Dashboard</NavLink></li>
             {/* <li><NavLink to="/create">Create Project</NavLink></li> */}
             <li><NavLink to="/admin">Admin</NavLink></li>
             <li><NavLink to="/adduser">New User</NavLink></li>
             <Logout />
            </span>
           ) : (
            <span>
             <li><NavLink to="/signup">Signup</NavLink></li>
             <li><NavLink to="/login">Login</NavLink></li>
            </span>
           )}
           </ul>
         </div>
       </nav>
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
            
             {/* <div>
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
              </div> */}
             {/* </div> */}
             
           
          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard/:id" component= {ProjectDetails} />
            {/* <Route path="/create" component= {CreateProject} /> */}
            {/* <ProtectedRoute authenticated={this.props.authenticated} path="/create" component={CreateProject} /> */}
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/admin" component={Admin} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/adduser" component={AddUser} />
          </Switch>
       {/* </div> */}
     </Router>
   );
 }
}
export default Navigation;