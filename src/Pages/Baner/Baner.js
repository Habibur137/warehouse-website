import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/bn-1.webp";
import img2 from "../../images/bn-2.webp";
import img3 from "../../images/bn-3.webp";

const Baner = () => {
  return (
    <div style={{ height: "70vh" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "70vh" }}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dominate The Market</h3>
            <p>Attract Angage & Convert Qualified Vehicle Shoppers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "70vh" }}
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Dominate The Market</h3>
            <p>Attract Angage & Convert Qualified Vehicle Shoppers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh" }}
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Dominate The Market</h3>
            <p>Attract Angage & Convert Qualified Vehicle Shoppers</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Baner;
