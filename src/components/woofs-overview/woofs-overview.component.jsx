import React from "react";
import WoofItem from "../woof-item/woof-item.component";

function WoofsOverview({ woofs, currentUser }) {
  return (
    <div>
      {woofs && woofs.map((woof) => <WoofItem key={woof.id} woof={woof} currentUser={currentUser} />)}
    </div>
  );
}

export default WoofsOverview;
