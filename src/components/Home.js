import React from "react";
import flower01 from "../img/flower01.jpg";
import flower02 from "../img/flower02.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      {/* First Section: Image Left, Text Right */}
      <div className="section">
        <img
          src={flower01}
          alt="flower01"
          className="image-left animated-image"
        />
        <div className="text-right">
          <h2 className="heading">Beautiful Flower 01</h2>
          <p className="paragraph">
            This is a sample text describing the beautiful flower shown in the
            picture to the left. The flower is known for its vibrant colors and
            exquisite petals. It adds a touch of elegance and beauty to any
            garden or bouquet.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className="section">
        <div className="text-left">
          <h2 className="heading">Beautiful Flower 02</h2>
          <p className="paragraph">
            This is a sample text describing the beautiful flower shown in the
            picture to the right. The flower is renowned for its delicate
            appearance and lovely fragrance. It is a popular choice for
            decorative arrangements and special occasions.
          </p>
        </div>
        <img
          src={flower02}
          alt="flower02"
          className="image-right animated-image"
        />
      </div>
    </div>
  );
};
