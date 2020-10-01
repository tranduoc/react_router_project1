import React, { Component } from "react";

import data from "./data.json";
import NewsRelate from "./NewsRelate";
class NewsDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container mt-4">
        {data.map((value, key) => {
          if (value.id === parseInt(this.props.match.params.id)) {
            return (
              <div>
                <div className="row h-100 " key={key}>
                  <div className="col my-auto ">
                    <div className="header-content mx-auto  news-item-title ">
                      <h3 className="mb-2  pb-3">{value.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body  text-center mb-2 ">
                  <img
                    src={"." + value.image}
                    alt=""
                    className="img-fluid news_image_item "
                  ></img>
                </div>
                <div className="card-body  ">
                  <p>{value.content}</p>

                  <p className="lead">{value.author}</p>
                </div>
              </div>
            );
          }
        })}

        <div className="container">
          <div className="card-body text-center">
            <h4 className="card-title">News Relate</h4>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                {data.map((value, key) => {
                  if (
                    key <= 3 &&
                    value.id !== parseInt(this.props.match.params.id)
                  ) {
                    return (
                      <NewsRelate
                        key={key}
                        newsitemId={value.id}
                        image={value.image}
                        title={value.title}
                        quotes={value.quotes}
                        author={value.author}
                      ></NewsRelate>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsDetail;
