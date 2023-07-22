import axios from "axios";
import React, { useState } from "react";

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const FetchNewsHandler = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=36b883ab18f049ae8f832437f0f744ae"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="clo-4">
            <button className="btn btn-primary" onClick={FetchNewsHandler}>
              Fetch News
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div className="col-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="key">{value.index}</div>
                    <h5 class="card-title ">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <a href={value.url} class="btn btn-primary" target="blank">
                      To know More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;
