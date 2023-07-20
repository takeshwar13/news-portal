import React from "react";

const HomeDisplay = () => {
  return (
    <div
      className="container-fluid bg-dark d-flex justify-content-center align-items-center flex-column"
      style={{ height: "30vh", borderColor: "red" }}
    >
      <h2 style={{ fontSize: "40px", color: "tomato" }}>News Portal</h2>
      <h5>This Website is created with NEWS Api.</h5>
    </div>
  );
};

export default HomeDisplay;
