import React, { Component } from "react";

import NewsItem from "./NewsItem";
import data from "./data.json";

class News extends Component {
  render() {
    return (
      <section className="container mt-5">
        <div className="row h-100 ">
          <div className="col my-auto ">
            <div className="header-content mx-auto  news-item-title "></div>
          </div>
        </div>

        <div className="row mt-3">
          {data.map((value, key) => {
            return (
              <NewsItem
                key={key}
                image={value.image}
                title={value.title}
                quotes={value.quotes}
                author={value.author}
              ></NewsItem>
            );
          })}
        </div>
      </section>
    );
  }
}

export default News;
