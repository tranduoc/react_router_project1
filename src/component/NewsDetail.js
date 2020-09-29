import React, { Component } from "react";

class NewsDetail extends Component {
  render() {
    return (
      <section className="container mt-4">
        <div className="card-body">
          <img src="./images/team2.jpg" alt="" className="img-fluid" />
          <p className="lead">Lorem, ipsum dolor.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illo
            omnis officiis quaerat alias
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolorem quod magni iusto voluptatum alias quos. Cupiditate, possimus
            similique soluta provident impedit recusandae velit et voluptatum
            quas voluptatibus veritatis consectetur.
          </p>
        </div>
        <div className="container">
          <div className="card-body text-center">
            <h4 className="card-title">News Relate</h4>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                <div className="card">
                  <a href="newsDetail.html">
                    {" "}
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
                    {" "}
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
                    {" "}
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
                    {" "}
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
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    );
  }
}

export default NewsDetail;
