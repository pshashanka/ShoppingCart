import React from "react";
import SubTotal from "./SubTotal";

const TotalCost = ({ subtotal, pickupSavings, taxesFees, pickupZip }) => (
  <div>
    <SubTotal subtotal={subtotal} />
  </div>
);

export default TotalCost;
