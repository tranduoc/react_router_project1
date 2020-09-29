import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container router">
          <p>© Your Website 2020. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="Home.js">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="Home.js">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="Home.js">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
