import React from "react";

const InventoryItem = ({ name, desc, price, quantity, supplier, img }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="p-3 border bg-light">
        <img style={{ height: "200px" }} className="w-100" src={img} alt="" />
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{supplier}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
