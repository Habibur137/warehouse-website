import React from "react";

const ManageItem = ({ item, setInventory, inventory }) => {
  const { name, price, supplier, quantity, _id } = item;
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
    <tr>
      <td>{name}</td>
      <td>{supplier}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <button
        onClick={() => handleDelete(_id)}
        className="bg-info border-0 w-100"
      >
        X
      </button>
    </tr>
  );
};

export default ManageItem;
