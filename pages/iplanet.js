import React from "react";
import { IphoneList } from "../helpers/IphoneList";
import IphoneItem  from "../component/IphoneItem";
import "../styles/iplanet.css";

function iplanet() {
   return (
    <div className="iplanet">
      <h1 className="iplanetTitle">Our Choose</h1>
      <div className="iphoneList">
        {IphoneList.map((iphoneItem, key) => {
          return (
            <IphoneItem
              key={key}
              image={iphoneItem.image}
        
              name={iphoneItem.name}
              price={iphoneItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default iplanet;
