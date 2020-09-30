import React, { Component } from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-4 mt-4">
        <div className="card">
          <div className="card-body">
            <NavLink to="/news-detail">
              <img src={this.props.image} alt="" className="img-fluid" />
            </NavLink>

            <blockquote className="blockquote">
              <h4 className="card-title mt-3 news-item">
                <NavLink to="/news-detail">{this.props.title}</NavLink>
              </h4>
              <p>{this.props.quotes}</p>
              <footer className="card-blockquote">
                <cite title="Source title">{this.props.author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
