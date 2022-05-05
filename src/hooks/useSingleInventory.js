import React, { useEffect, useState } from "react";

const useSingleInventory = (id) => {
  const [singleInventory, setSingleInventory] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      const resposive = await fetch(`http://localhost:5000/inventory/${id}`);
      const result = await resposive.json();
      setSingleInventory(result);
    };
    getInventory();
  }, [id]);
  return [singleInventory];
};

export default useSingleInventory;
