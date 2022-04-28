import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/banner-1.png";
import img2 from "../../images/banner-2.jpg";
import img3 from "../../images/banner-3.jpg";

const Baner = () => {
  return (
    <div style={{ height: "90vh" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "90vh" }}
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
            style={{ height: "90vh" }}
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
            style={{ height: "90vh" }}
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
