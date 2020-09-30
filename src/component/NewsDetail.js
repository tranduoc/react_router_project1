import React, { Component } from "react";

import data from "./data.json";
class NewsDetail extends Component {
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
                      <h1 className="mb-5 text-center pb-3">{value.title}</h1>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <img src={value.image} alt="" className="img-fluid "></img>

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
                <div className="card">
                  <a href="newsDetail.html">
                    <img
                      className="card-img-top"
                      src="./images/team3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="newsDetail.html">
                    <img
                      className="card-img-top"
                      src="./images/team4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="newsDetail.html">
                    <img
                      className="card-img-top"
                      src="./images/team3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
                <div className="card">
                  <a href="newsDetail.html">
                    <img
                      className="card-img-top"
                      src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsDetail;
