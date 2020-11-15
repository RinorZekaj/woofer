import React from "react";

import "./woof-item.styles.scss";
import Paw from '../../assets/pawprint.svg'

function WoofItem({ woof }) {
  const { text, numberOfLikes, user } = woof;

  const likeHandler = () => {
    console.log("Liked");
  }

  return (
    <div className="woof-item-container">
      <div className='acc-holder'>
        <div>{user.substring(0, 1)}</div>
        <p>{user}</p>
      </div>
      <p className='woof-text'>{text}</p>
      <div className='stats-holder'>
        <img src={Paw} alt='paw' onClick={likeHandler} />
        <p>{numberOfLikes} Paws</p>
      </div>
    </div>
  );
}

export default WoofItem;
