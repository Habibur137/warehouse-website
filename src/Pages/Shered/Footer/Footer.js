import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
  };
  return (
    <div className="bg-light ">
      <div className="container px-4 pb-4 mt-5">
        <div className="row gx-5">
          <div className="col-12 col-lg-4">
            <h3 style={{ textAlign: "left" }}>About Company</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              ullam repellat sit. Ipsa saepe maiores placeat eligendi totam
              quisquam necessitatibus dignissimos
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3 style={{ textAlign: "left" }}>Importants</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inventory">inventory</Link>
              </li>
              <li>
                <Link to="/manageinventory">Manage Inventory</Link>
              </li>
              <li>
                <Link to="/myitems">My Items</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <h3 style={{ textAlign: "left" }}>Our Newsletter</h3>
            <p>
              Be the first to know about our offers and discounts by subscribing
              to the newsletter
            </p>
            <input
              style={{ borderBottom: "1px solid black" }}
              className="text-black border-1"
              type="text"
              placeholder="Enter Email"
            />
            <br />
            <button className="border-0 px-5 py-1 bg-info mt-3">Submit</button>
          </div>
        </div>
        <p className="mt-3 text-center">
          {" "}
          &copy; 2022 All Right Reserved By Sunrise Motors
        </p>
      </div>
    </div>
  );
};

export default Footer;
