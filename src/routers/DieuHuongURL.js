import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./../component/News.js";
import Home from "./../component/Home.js";
import NewsDetail from "./../component/NewsDetail.js";
import Contact from "./../component/Contact.js";
class DieuHuongURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/news-detail">
          <NewsDetail />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    );
  }
}

export default DieuHuongURL;
