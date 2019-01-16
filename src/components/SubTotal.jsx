import React from "react";

const SubTotal = ({ subtotal }) => (
<div>
    <p className="alignleft">Subtotal</p>
    <p className="alignright">{subtotal}</p>
</div>);

export default SubTotal;
