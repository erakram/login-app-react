import React, { Component } from 'react'
// import firebase from './config/fbConfig';
// import { withRouter } from 'react-router-dom';


class Adduser extends Component {
    state = {
        name: '',
        age: '',
        gender: '',
        email: '',
        mobile: '',
        designation: ''
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        //alert('A list was submitted: ' + this.state.formvalue);
        e.preventDefault();
        fetch('https://nodeapi-mongo-react.herokuapp.com/api/v1/create_user', {
            method: 'POST',
            Origin: 'https://nodeapi-mongo-react.herokuapp.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
           body: JSON.stringify( {
    name: this.state.name,    
    age: this.state.age,
    gender: this.state.gender,
    email: this.state.email,
    mobile: this.state.mobile,
    designation: this.state.designation
   })
       }).then(res => res.json())
       .then((data)=> {
        alert("User Added");
        this.props.history.push('/admin');
        console.log("User Added")
       })
       .catch ((error) => {
                    this.setState({ error: error });
                    console.log('Error')
                })
   }
    render() {
        return (
            <div className="container">
                <form className="white addForm">
                    <h5 className="grey-text text-darken-3">Add User</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="text" id="mobile" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" id="designation" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Add User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Adduser;