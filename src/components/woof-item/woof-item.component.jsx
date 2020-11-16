import React, { useState } from "react";

import "./woof-item.styles.scss";
import Paw from "../../assets/pawprint.svg";
import firebase, { firestore } from "../../firebase/firebase.utils";
import WoofReply from "../woof-reply/woof-reply.compoent";

function WoofItem({ woof, currentUser }) {
  const [showReplies, setShowReplies] = useState(false);
  const [woofBack, setWoofBack] = useState("");

  const { text, numberOfLikes, user, id, replies } = woof;

  const likeHandler = () => {
    console.log("Liked");
    firestore
      .collection("woofs")
      .doc(id)
      .get()
      .then((res) => {
        console.log(res.data());
        let oldData = res.data();

        firestore
          .collection("woofs")
          .doc(id)
          .update({
            numberOfLikes: oldData.numberOfLikes + 1,
          });
      });
  };

  const handleWoofBack = () => {
    firestore.collection('woofs').doc(id).update({
      replies: firebase.firestore.FieldValue.arrayUnion({
        reply: woofBack,
        user: currentUser.email
      })
    })
  }

  return (
    <div className="woof-item-container">
      <div className="acc-holder">
        <div>{user.substring(0, 1)}</div>
        <p>{user}</p>
      </div>
      <p className="woof-text">{text}</p>
      <div className="stats-holder">
        <img src={Paw} alt="paw" onClick={likeHandler} />
        <p>{numberOfLikes} Paws</p>
      </div>
      {replies && (
        <p onClick={() => setShowReplies(!showReplies)} className="show-btn">
          {showReplies
            ? "Hide bark replies"
            : `Show ${replies.length} more bark replies`}
        </p>
      )}
      {showReplies && (
        <div>
          {replies.map((reply) => (
            <WoofReply key={reply.user + reply.reply} barkReply={reply} />
          ))}
        </div>
      )}
      <div className="input-holder">
        <input
          placeholder="Reply with a bark"
          value={woofBack}
          onChange={(e) => setWoofBack(e.target.value)}
        />
        <button onClick={handleWoofBack}>Bark Back</button>
      </div>
    </div>
  );
}

export default WoofItem;
