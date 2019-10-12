import React, { Component } from 'react';
import Popup from "reactjs-popup";
import '../src/App.css';
// import { useAlert } from 'react-alert'


class Admin extends Component {
  
  state = {
    users : [],
    userLength : null,
    name: '',
    age: '',
    gender: '',
    email: '',
    mobile: '',
    designation: ''
    
  };

  

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  componentDidMount() {
    var url = 'https://nodeapi-mongo-react.herokuapp.com/api/v1/show_users';
        console.log(url);
        fetch(url, {
          method: 'GET',
            Origin: 'https://nodeapi-mongo-react.herokuapp.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://nodeapi-mongo-react.herokuapp.com/'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw Error('Network request failed.')
            }
            return response;
            
        })
        .then(data => data.json())
        .then(data => { 
                this.setState({users: data})
                this.setState({userLength: data.length})

        }, (ex) => {
            console.log('parsing failed', ex)
        })
}

  handleDelete = (e) => {
    console.log("Delete User");
    console.log(e.target.getAttribute('id'));
    var userId = e.target.getAttribute('id');
    console.log(userId)
    var url = 'https://nodeapi-mongo-react.herokuapp.com/api/v1/delete_user/' +userId;
    console.log(url);
    e.preventDefault();
        fetch(url, {
            method: 'DELETE',
            Origin: 'https://nodeapi-mongo-react.herokuapp.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://nodeapi-mongo-react.herokuapp.com/'
            },
          }).then(res => res.json())
          .then((data)=> {
          alert("User Deleted");
          this.props.history.push('/');
          console.log("Deleted")
          console.log(data);
          })
          .catch ((error) => {
                       this.setState({ error: error });
                       console.log('Error')
                   })
      
  }

  handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update User");
    console.log(e.target.getAttribute('id'));
    var userId = e.target.getAttribute('id');
    var url = 'https://nodeapi-mongo-react.herokuapp.com/api/v1/update_user/' +userId;
    console.log(url);
    fetch(url, {
            method: 'PUT',
            Origin: 'https://nodeapi-mongo-react.herokuapp.com/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://nodeapi-mongo-react.herokuapp.com/'
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
        alert("User Updated");
        window.location.reload();

        console.log("Updated");
        // this.props.history.push('/');
        
       })
       .catch ((error) => {
                    this.setState({ error: error });
                    console.log('Error')
                })
  }
  // const alert = useAlert()

  render() {
  const {users} = this.state
  const userList = users.length ? (
    users.map(user => {
      return (
        <div className="card z-depth-0 project-summery" key={user._id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title red-text text-darken-5">{user.name}</span>
            <hr/>
            <p>{user._id}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Contact No.:{user.contact.mobile}</p>
            <p>Designation: {user.contact.designation}</p>
          </div>
          <div className="center">
          {/* <button onClick={() => {useAlert().show('Oh look, an alert!')}}>
              Show Alert
          </button> */}
            <button className="btn red" id={user._id} onClick={this.handleDelete}>
              Delete
            </button>&nbsp;
            {/* <button className="btn grey" id={user._id} onClick={this.togglePopup.bind(this)}> */}
            {/* <button className="btn grey" id={user._id} onClick={this.handleUpdate}>
              Update
            </button> */}
            <Popup trigger={<button className="btn grey">Update</button>} position="right center">
              <div className="popup">
                <div className="container popup_class">
                  <form className="white formPadding">
                      <h5 className="grey-text text-darken-3">Update User</h5>
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
                          <button className="btn pink lighten-1 z-depth-0" id={user._id} onClick={this.handleUpdate}>Update</button>
                      </div>
                  </form>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      )

    })
  ) : (
    <div className="center">No data available</div>
  );
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <div className="">
              <h3 className="center">All Users</h3>
              {userList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Admin;
