import React from "react";
import "./PostSection.css";
import postImg from "../../images/Baatara.jpg";

function PostSection() {
  return (
    <div className="post-section">
      <div className="container">
        <div className="post-content">
          <h2>Know Before You Go</h2>
          <h1>
            Traveling opens the door to creating{" "}
            <span className="highlight">memories</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ornare orci dui, et placerat tortor ullamcorper gravida. Morbi
            fermentum diam nibh, ut eleifend ante malesuada ac. Nam vel
            tincidunt justo. Proin vitae gravida ex, a pretium nisl. Nullam
            vulputate, nulla a luctus dapibus, justo justo tincidunt dui, eget
            rutrum elit justo in libero. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aliquam at
            nunc purus.Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aliquam at
            nunc purus. Aliquam at nunc purus.
          </p>
        </div>
        <div className="post-images">
          <div className="post-img-box">
            <img src={postImg} alt="Image 1" />
          </div>
          <div className="post-img-box">
            <img src={postImg} alt="Image 2" />
          </div>
          <div className="post-img-box">
            <img src={postImg} alt="Image 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSection;
