import React, { Component } from 'react';
import '../src/App.css';
import '../src/index.css'

class Footer extends Component {
    render() {
        return (
          <div className="footer grey darken-3">
          {/* //   <p>Footer</p>
          // </div>                     */}
          {/* //   <footer class="page-footer"> */}
            <div className="container">
              <div className="row">
                <div className="col l6 s12 left"><br/>
                  <h5 className="black-text">Mohammad Akram</h5>
                  <p className="white-text text-lighten-4">This project is all about API integration from Node/MongoDB to ReactJs</p>
                </div>
                <div className="col l4 offset-l2 s12 center"><br/>
                  <h5 className="black-text">Social Network</h5>
                  <ul>
                    <li><a className="#f9bf0a-text text-lighten-3" href="https://www.linkedin.com/in/mohammad-akram-ba086847/">LinkedIn</a></li>
                    <li><a className="#f9bf0a-text text-lighten-3" href="https://github.com/erakram/">GitHub</a></li>
                    <li><a className="#f9bf0a-text text-lighten-3" href="https://www.facebook.com/erakram17">Facebook</a></li>
                    <li><a className="#f9bf0a-text text-lighten-3" href="https://www.instagram.com/_er_akram/">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright center">
              <div className="container orange-text">
              © 2019 Copyright Akram
              {/* <a class="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/mohammad-akram-ba086847/">LinkdIn</a> */}
              </div>
            </div>
            </div>
          // {/* // </footer> */}
        );
    }
}

export default Footer;