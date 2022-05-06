import { useEffect, useState } from "react";

const useInventory = (year) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      if (year) {
        const resposive = await fetch(
          `https://damp-escarpment-79081.herokuapp.com/inventory?releaseYear=${year}`
        );
        const result = await resposive.json();
        setInventory(result);
      } else {
        const resposive = await fetch(
          `https://damp-escarpment-79081.herokuapp.com/inventory`
        );
        const result = await resposive.json();
        setInventory(result);
      }
    };
    getInventory();
  }, [year]);
  return [inventory, setInventory];
};

export default useInventory;
