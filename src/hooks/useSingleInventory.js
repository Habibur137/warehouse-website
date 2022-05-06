import React, { useEffect, useState } from "react";

const useSingleInventory = (id) => {
  const [singleInventory, setSingleInventory] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      const resposive = await fetch(
        `https://damp-escarpment-79081.herokuapp.com/inventory/${id}`
      );
      const result = await resposive.json();
      setSingleInventory(result);
    };
    getInventory();
  }, [id]);
  return [singleInventory];
};

export default useSingleInventory;
