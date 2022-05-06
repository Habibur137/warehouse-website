import React from "react";
import { Link, useParams } from "react-router-dom";
import useSingleInventory from "../../../../hooks/useSingleInventory";

const InventoryItemDetail = () => {
  const { id } = useParams();
  const [singleInventory] = useSingleInventory(id);
  let { name, desc, price, supplier, quantity, img } = singleInventory;
  const handleQuantity = (e) => {
    e.preventDefault();
    let previousQuantity = parseInt(quantity);
    const inputQuantity = parseInt(e.target.quantity.value);
    const updateQuantity = { quantity: (previousQuantity += inputQuantity) };
    console.log(updateQuantity);
    fetch(`http://localhost:5000/inventory/${id}`, {
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
        console.log(data);
      });
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
            <button className="border-0 px-5 py-1 bg-info text-white">
              Delivered
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleQuantity}>
            <p className="mt-4 mb-0">Update Quantity</p>
            <input
              style={{ borderBottom: "1px solid black" }}
              className="text-black mb-3"
              type="text"
              placeholder="Quantity"
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
