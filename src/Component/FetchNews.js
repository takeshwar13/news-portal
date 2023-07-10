import axios from "axios";
import React from "react";

const FetchNews = () => {
  const FetchNewsHandler = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=36b883ab18f049ae8f832437f0f744ae"
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="clo-4">
          <button className="btn btn-primary" onClick={FetchNewsHandler}>
            {" "}
            Fetch News
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchNews;
