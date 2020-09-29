import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="./index.html">
            React Router{" "}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="./news.html">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href>
                  News Detail
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="./contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
