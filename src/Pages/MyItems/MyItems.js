import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      const resposive = await fetch(
        `https://damp-escarpment-79081.herokuapp.com/inventorys?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const result = await resposive.json();
      setInventory(result);
    };
    getInventory();
  }, [user]);
  console.log(inventory);
  const handleItemAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const desc = e.target.desc.value;
    const img = e.target.img.value;
    const item = {
      email: user?.email,
      name,
      price,
      quantity,
      supplier,
      desc,
      img,
    };
    fetch("https://damp-escarpment-79081.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        if (data.insertedId) {
          toast("item added");
        }
      });
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://damp-escarpment-79081.herokuapp.com/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const filterInventory = inventory.filter((item) => item._id !== id);
          setInventory(filterInventory);
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <table className="table table-hover table-success">
            <thead>
              <tr>
                <th scope="col">Car Model Name</th>
                <th scope="col">Supplier</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.supplier}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-info border-0 w-100"
                  >
                    X
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12 col-lg-4">
          <h3>Add Item</h3>
          <form onSubmit={handleItemAdd} className="d-flex flex-column ">
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              value={user?.email}
              readOnly
              disabled
            />
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Car Model Number"
              name="name"
            />
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Description"
              name="desc"
            />
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Supplier Name"
              name="supplier"
            />
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Price"
              name="price"
            />
            <input
              className="mb-2 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Quantity"
              name="quantity"
            />
            <input
              className="mb-4 text-black"
              style={{ borderBottom: "1px solid gray" }}
              type="text"
              placeholder="Image Link"
              name="img"
            />
            <input
              className="bg-info border-0 py-1"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
