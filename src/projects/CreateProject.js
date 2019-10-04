// import React, { Component } from 'react'
// import firebase from './config/fbConfig';
// // import { withRouter } from 'react-router-dom';


// class CreateProject extends Component {
//     state = {
//         title: '',
//         content:  ''
        
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { email, password } = this.state;
//         firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
//                 this.props.history.push('/');
//                 console.log('Signup Success')
//             })
//             .catch ((error) => {
//                 this.setState({ error: error });
//                 console.log('Error')
//             })
//         console.log(this.state);
//     }
//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit= {this.handleSubmit} className="white">
//                     <h5 className="grey-text text-darken-3">Signup Form</h5>
//                     <div className="input-field">
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={this.handleChange}></input>
//                     </div>
//                     <div className="input-field">
//                         <label htmlFor="conetent">Content</label>
//                         {/* <input type="text" id="lastName" onChange={this.handleChange}></input> */}
//                         <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
//                     </div>
//                     <div className="input-field">
//                         <button className="btn pink lighten-1 z-depth-0">Create</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default CreateProject;