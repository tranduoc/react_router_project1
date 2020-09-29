import React, { Component } from "react";

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
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  {" "}
                  <img src="./images/team1.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3 news-item">
                    <a href="./newsDetail.html">News item1</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  {" "}
                  <img src="./images/girl2.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3  news-item">
                    <a href="./newsDetail.html">News item2</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    {" "}
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  <img src="./images/team1.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3  news-item">
                    <a href="./newsDetail.html">News item3</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    {" "}
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  <img src="./images/team1.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3  news-item">
                    <a href="./newsDetail.html">News item3</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    {" "}
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  <img src="./images/team1.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3  news-item">
                    <a href="./newsDetail.html">News item3</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    {" "}
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card">
              <div className="card-body">
                <a href="./newsDetail.html">
                  <img src="./images/team1.jpg" alt="" className="img-fluid" />
                </a>
                <blockquote className="blockquote">
                  <h4 className="card-title mt-3  news-item">
                    <a href="./newsDetail.html">News item3</a>{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi illo omnis officiis quaerat alias
                  </p>
                  <footer className="card-blockquote">
                    {" "}
                    <cite title="Source title">From tranduoc</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
