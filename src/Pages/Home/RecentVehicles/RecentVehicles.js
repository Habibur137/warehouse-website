import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class RecentVehicles extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ backgroundColor: "#F1E5EF" }} className="py-3">
        <div class="container px-4 my-5">
          <div class="row g-3">
            <div class="col-12 col-lg-2">
              <h6>RECENT VEHICLES</h6>
              <p>
                Browse through the vast selection of vehicles that have recently
                been added to our inventory.
              </p>
            </div>
            <div class="col-12 col-lg-10">
              {" "}
              <Slider {...settings}>
                <div>
                  <img src="https://i.ibb.co/x5HLZW0/1.jpg" alt="" />
                  <div>
                    <h6>Renault ZOE</h6>
                    <p>Price: 30Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/C9nwt2h/2.jpg" alt="" />
                  <div>
                    <h6>Renault TURBO</h6>
                    <p>Price: 35Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/Kwh0Gty/3.jpg" alt="" />
                  <div>
                    <h6>Renault TRIBER</h6>
                    <p>Price: 25Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/TtwrQb3/4.jpg" alt="" />
                  <div>
                    <h6>Renault SCENIC</h6>
                    <p>Price: 37Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/D42W7DH/5.jpg" alt="" />
                  <div>
                    <h6>Renault K-ZE</h6>
                    <p>Price: 40Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/phjrFL4/6.jpg" alt="" />
                  <div>
                    <h6>Renault KIGER</h6>
                    <p>Price: 20Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/YZH3VWP/7.jpg" alt="" />
                  <div>
                    <h6>Renault CLIO</h6>
                    <p>Price: 26Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/pn6kFvb/8.jpg" alt="" />
                  <div>
                    <h6>Renault ARKANA</h6>
                    <p>Price: 28Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/BzqVcGK/9.jpg" alt="" />
                  <div>
                    <h6>Renault KWID</h6>
                    <p>Price: 30Lakh</p>
                  </div>
                </div>
                <div>
                  <img src="https://i.ibb.co/XXGYHBS/10.jpg" alt="" />
                  <div>
                    <h6>2022 SIENNA</h6>
                    <p>Price: 15Lakh</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
