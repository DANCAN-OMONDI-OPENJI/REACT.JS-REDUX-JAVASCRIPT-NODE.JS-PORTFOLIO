import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="home">
      <h3>Hello, I am Openji Dancan Omondi,</h3>
      <div className="home-img-div">
        <img
          src="./IMG-20220701-WA0031.jpg"
          alt="Dancan Openji facing the camera"
          width="inherit"
          /*height="1350"*/
          object-fit="cover"
        />
      </div>
      <p>a front-end web developer</p>
    </div>
  );
}
