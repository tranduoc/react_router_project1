import React, { Component } from "react";

import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    return (
      <section className="container mt-5">
        <div className="row h-100 ">
          <div className="col my-auto ">
            <div className="header-content mx-auto  news-item-title ">
              <h1 className="mb-5 text-center pb-3">News</h1>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </section>
    );
  }
}

export default News;
