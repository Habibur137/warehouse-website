import React from "react";
import { Link } from "react-router-dom";

const InventoryItem = ({ _id, name, desc, price, quantity, supplier, img }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="p-3 border bg-light">
        <img style={{ height: "200px" }} className="w-100" src={img} alt="" />
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>Price: {price}</p>
        <p>In Stock: {quantity} ps</p>
        <p>
          <small>Supplier: {supplier}</small>
        </p>
        <Link
          to={`/inventory/${_id}`}
          className="border-0 px-5 py-1 bg-info text-white"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default InventoryItem;
