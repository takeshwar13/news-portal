import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const FetchNews = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const FetchNewsHandler = async () => {
      await axios
        .get(
          props.cat
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=36b883ab18f049ae8f832437f0f744ae`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=36b883ab18f049ae8f832437f0f744ae"
        )
        .then((response) => {
          setNews(response.data.articles);
        });
    };

    FetchNewsHandler();
  }, [props.cat]);
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="clo-4">
            <h4 className="headline d-flex justify-content-center aglign-items-center">
              <u>TOP HEADLINES</u>
            </h4>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div
                className="col-4 d-flex justify-content-center aglign-items-center"
                style={{ boxShadow: "2px 2px 10px gray", borderRadius: "10px" }}
              >
                <div class="card my-3" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="key">{value.index}</div>
                    <h5 class="card-title">{value.title}</h5>
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
