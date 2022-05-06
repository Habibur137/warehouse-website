import React from "react";
import { Link } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import InventoryItem from "../Home/InventoryItem/InventoryItem";

const Inventory = () => {
  const [inventory] = useInventory(2022);
  console.log(inventory);
  return (
    <div className="container px-4">
      <div className="text-center my-4">
        <h2>Explore Our Vehicles</h2>
        <h5>Renault India</h5>
      </div>
      <div className="row g-4">
        {inventory.map((item, index) => (
          <InventoryItem {...item} key={index} />
        ))}
      </div>
      <div className="text-center">
        <Link
          className="px-5 py-1 bg-info text-white my-4 d-inline-block"
          to="/manageinventory"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
