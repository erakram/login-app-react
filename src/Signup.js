import React, { Component } from 'react'
import firebase from './config/fbConfig';
import { withRouter } from 'react-router-dom';


class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
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
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                this.props.history.push('/');
                console.log('Signup Success')
            })
            .catch ((error) => {
                this.setState({ error: error });
                console.log('Error')
            })
        console.log(this.state);
    }
//     handleSubmit = (e) => {
//         //alert('A list was submitted: ' + this.state.formvalue);
//         e.preventDefault();
//         fetch('http://localhost:8080/signup_create', {
//             method: 'POST',
//             Origin: 'http://localhost:8080',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             //   'Access-Control-Allow-Origin': '*'
//             },
//            body: JSON.stringify( {
//     //    id : this.state.id,
//     //    item:this.state.item,
//     //    itemType: this.state.itemType,
//         firstname: this.state.firstname,    
//         lastname: this.state.lastname,
//         email: this.state.email,
//         password: this.state.password
//    })
//        }).then(res => res.json())
//        .then((data)=> {
//         this.props.history.push('/');
//        })
//        .catch ((error) => {
//                     this.setState({ error: error });
//                     console.log('Error')
//                 })
//    }
    render() {
        return (
            <div className="container center">
                <br/>
                <form onSubmit= {this.handleSubmit} className="white loginForm">
                    <h5 className="grey-text text-darken-3">Signup Form</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange}></input>
                    </div>
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
                </form><br/>
            </div>
        )
    }
}

export default withRouter(Signup);