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
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/news" component={News} />

        <Route
          exact
          path="/news-detail/:slug.:id.html"
          component={NewsDetail}
        />

        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default DieuHuongURL;
