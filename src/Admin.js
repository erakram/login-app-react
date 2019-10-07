// import React from 'react';
import React, { Component } from 'react'
// import Notifications from './Notifications'
// import ProjectList from './projects/ProjectList'
// import Blogs from './Blogs'

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
                // console.log(data);
                // console.log(data[0].name)
                // console.log(data[0].age)
                // console.log(data[0].gender)
                // console.log(data[0].email)
                // console.log(data[0].contact.designation)
                // console.log(data[0].contact.mobile)
                this.setState({users: data})
                // console.log(this.state.users[0].contact.mobile)
                console.log(this.state.users)
                this.setState({userLength: data.length})
                // console.log(usersLength)

        }, (ex) => {
            console.log('parsing failed', ex)
        })
}

// getFor () {
 
//   const v = for()
// }

  render() {
    console.log("Lamha");
    // var dummy = this.state.users;
    // console.log(dummy);
    console.log("ddd");
    console.log(this.state.userLength);
    console.log("xxx");
    // console.log(this.state.users);
    // console.log(this.state.usersLength)
    // {this.state.users.map((data, index) =>(
    //   <p key={index}>Hello. {data[{index}].name}</p>
    // ))}
    // const v = for (var i = 0, i<=10, i++) {
      // var i = this.state.users.length
      // console.length(i)
    // const contents = this.state.users[0].map(item => {
    //   //change the title and location key based on your API
    //   return <tr>
    //       <td>{item.name}</td> 
    //       <td>{item.age}</td>
    //     </tr>
        
    // })
  
    // console.log(this.state.users.name)
//     let data = this.state.data;
//     const items = this.state.data.map((item, key) =>
//     <li key={item.id}>{item.name}</li>
// );
  const {users} = this.state
  const userList = users.length ? (
    users.map(user => {
      return (
        <div className="card z-depth-0 project-summery" key={user._id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title red-text">{user.name}</span>
            <hr/>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Contact No.:{user.contact.mobile}</p>
            <p>Designation: {user.contact.designation}</p>
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

// {this.state.users.map(function(d, index){
//   return (
//     <div>
//       <div className="col s12 m12">
//       <div className="card z-depth-0 project-summery">
//           <div className="card-content grey-text text-darken-3">
//               <span className="card-title" key={d._id}>{d.name}</span>
//               <p key={d._id}>{d.contact.mobile}</p>
//               <p key={d._id}>{d.contact.designation}</p>
//               <p key={d._id}>{d.email}</p>
//               <p className="grey-text">20th August, 2 AM</p>
//               {/* {contents} */}
//           </div>
//       </div>
//     </div>
//       {/* <div>
//         <li key={index}>{d.name}</li>
//       </div> */}
//     </div>
//   )
//   })}