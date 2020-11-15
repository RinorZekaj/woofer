import React from "react";
import WoofItem from "../woof-item/woof-item.component";

function WoofsOverview({ woofs }) {
  return (
    <div>
      {woofs && woofs.map((woof) => <WoofItem key={woof.id} woof={woof} />)}
    </div>
  );
}

export default WoofsOverview;
