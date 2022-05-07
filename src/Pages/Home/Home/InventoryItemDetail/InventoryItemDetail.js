import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventory from "../../../../hooks/useInventory";
import useSingleInventory from "../../../../hooks/useSingleInventory";

const InventoryItemDetail = () => {
  const [inventory, setInventory] = useInventory(2022);
  const { id } = useParams();
  const [singleInventory] = useSingleInventory(id);
  let { name, desc, price, supplier, quantity, img } = singleInventory;
  let previousQuantity = parseInt(quantity);

  // decrement quantity
  const decrementButton = () => {
    let updateQuantity = { quantity: previousQuantity - 1 };
    fetch(`https://damp-escarpment-79081.herokuapp.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Derement by 1 successfully");
        if (data.modifiedCount > 0) {
          const filterItem = inventory.filter((item) => item);
          setInventory(filterItem);
        }
        console.log(data);
      });
  };

  // add quantity
  const handleQuantity = (e) => {
    e.preventDefault();
    let updateQuantity;
    if (!isNaN(e.target.quantity.value) && e.target.quantity.value !== "") {
      const inputQuantity = parseInt(e.target.quantity.value);
      updateQuantity = { quantity: (previousQuantity += inputQuantity) };
      fetch(`https://damp-escarpment-79081.herokuapp.com/inventory/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          e.target.reset();
          alert("update successfully");
        });
    } else {
      alert("Please Give a Number");
    }
  };
  return (
    <div className="container px-4">
      <div className="row gx-5">
        <div className="col-12 col-md-6">
          <div className="p-3 border bg-light">
            <img
              style={{ height: "200px" }}
              className="w-100"
              src={img}
              alt=""
            />
            <h3>{name}</h3>
            <p>{desc?.slice(0, 200)}</p>
            <p>id: {id}</p>
            <div className="d-flex">
              <p className="me-3">Price: {price}</p>
              <p>In Stock: {quantity} ps</p>
            </div>
            <p>
              <small>Supplier: {supplier}</small>
            </p>
            <button
              onClick={decrementButton}
              className="border-0 px-5 py-1 bg-info text-white"
            >
              Delivered
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleQuantity}>
            <p className="mt-4 mb-0">Update Quantity</p>
            <input
              style={{ borderBottom: "1px solid black" }}
              className="text-black mb-3 px-2 py-1 border-1"
              type="number"
              placeholder="Number Of Amount"
              name="quantity"
            />
            <br />
            <input
              className="border-0 px-5 py-1 bg-info text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
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

export default InventoryItemDetail;
