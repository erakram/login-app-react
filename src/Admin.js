import React, { Component } from 'react'

class Admin extends Component {
  state = {
    users : [],
    userLength : null
    
  };

  componentDidMount() {
    var url = 'http://localhost:8080/api/v1/show_users';
        console.log(url);
        fetch(url)
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
    var url = 'http://localhost:8080/api/v1/delete_user/' +userId;
    console.log(url);
    e.preventDefault();
        fetch(url, {
            method: 'DELETE',
            Origin: 'http://localhost:8080',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            //   'Access-Control-Allow-Origin': '*'
            },
          }).then(res => res.json())
          .then((data)=> {
           this.props.history.push('/admin');
          console.log("Deleted")
          console.log(data);
          })
          .catch ((error) => {
                       this.setState({ error: error });
                       console.log('Error')
                   })
      
  }

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
            <button className="btn red" id={user._id} onClick={this.handleDelete}>
              Delete
            </button>&nbsp;
            <button className="btn grey">
              Update
            </button>
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
              <h3 className="center">User List</h3>
              {userList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Admin;
