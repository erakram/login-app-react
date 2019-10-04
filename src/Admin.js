// import React from 'react';
import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from './projects/ProjectList'
import Blogs from './Blogs'

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            {/* <Notifications />  */}
            <Blogs />
          </div>
        </div>
      </div>
    )
  }
}
export default Admin;