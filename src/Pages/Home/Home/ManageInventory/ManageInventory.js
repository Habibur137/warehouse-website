import React from "react";
import useInventory from "../../../../hooks/useInventory";
import ManageItem from "../../ManageItem/ManageItem";

const ManageInventory = () => {
  const [inventory, setInventory] = useInventory();
  console.log(inventory);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <table className="table table-hover table-success">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Supplier</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <ManageItem
                  item={item}
                  key={index}
                  setInventory={setInventory}
                  inventory={inventory}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
