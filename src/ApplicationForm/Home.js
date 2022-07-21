import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="white">
        <div className="top">
          <h1>Hire Our Traineees</h1>
          <p>Please provide your details, our HR will touch base with you.</p>
        </div>
        <div className="bottom">
          <p className="cont">* Required</p>
        </div>
        <div>
          <label className="cont">1. Comapany Name *</label> <br />{" "}
          <input
            type="text"
            id="username"
            placeholder="Enter the name"
            className="col-12"
          ></input>
          <br />
          <br />
          <label className="cont">2. HR Name *</label> <br />{" "}
          <input
            type="text"
            id="username"
            placeholder="Enter the name"
            className="col-12"
          ></input>
          <br />
          <br />
          <label className="cont">3. Email *</label> <br />{" "}
          <input
            type="text"
            id="username"
            placeholder="Enter the name"
            className="col-12"
          ></input>
          <br />
          <br />
          <label className="cont">4. Contact Number *</label> <br />
          <input
            type="text"
            id="username"
            placeholder="Enter the name"
            className="col-12"
          ></input>
          <div className="st">
            <br />

            <button className="color">submit</button>
          </div>
        </div>
      </div>
      <div>
        <p>
          This content is created by the owner of the form. The data you submit
          will be sent to the form owner. Microsoft is not responsible for the
          privacy or security practices of its customers, including those of
          this form owner. Never give out your password.
        </p>
      </div>
      <div>
        <p>Powered by Microsoft Forms |</p>
      </div>
      <div>
        <p>
          The owner of this form has not provided a privacy statement as to how
          they will use your response data. Do not provide personal or sensitive
          information.
        </p>
      </div>
    </div>
  );
};

export default Home;