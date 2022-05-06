import React from "react";
import Baner from "../../Baner/Baner";
import Best from "../Best/Best";
import Inventory from "../Inventory/Inventory";
import RecentVehicles from "../RecentVehicles/RecentVehicles";

const Home = () => {
  return (
    <div>
      <Baner />
      <Inventory />
      <RecentVehicles />
      <Best />
    </div>
  );
};

export default Home;
