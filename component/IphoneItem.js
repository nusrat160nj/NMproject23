import React from "react";

function IphoneItem({ image, name, price }) {
  return (
    <div className="iphoneItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{price}/-</p>
    </div>
  );
}

export default IphoneItem;
