import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const getInventory = async () => {
      const resposive = await fetch("http://localhost:5000/inventory");
      const result = await resposive.json();
      setInventory(result);
    };
    getInventory();
  }, []);
  return [inventory];
};

export default useInventory;
