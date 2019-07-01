// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Login from './Login'
// import Signup from './Signup'
import Navigation from './Navigation';
import firebase from './config/fbConfig';
class App extends Component {
state = {
  authenticated: false,
};
componentDidMount() {
  firebase.auth().onAuthStateChanged((authenticated) => {
    authenticated ? this.setState(() => ({
          authenticated: true,
        })): this.setState(() => ({
          authenticated: false,
        }));
  });
}
render() {
  return <Navigation authenticated={this.state.authenticated} />;
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
/* <BrowserRouter>
<div className='App'>
    <Switch>
      <Route path='/login' component= {Login} />
      <Route path='/signup' component= {Signup} />
    </Switch>
</div>
</BrowserRouter> */
//     </div>
    
//   );
// }

export default App;
