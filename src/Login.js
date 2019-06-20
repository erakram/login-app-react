import React, { Component } from 'react'
import firebase from './config/fbConfig';
import { withRouter } from 'react-router-dom';



class Login extends Component {
    state = {
        email:'',
        password:''
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                this.props.history.push('/');
                console.log('Login Success')
            })
            .catch ((error) => {
                this.setState({ error: error });
                console.log('Error')
            })
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit= {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Login Form</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);