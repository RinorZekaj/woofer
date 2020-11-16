import React from "react";

import './woof-reply.styles.scss'

function WoofReply({ barkReply }) {
  const { reply, user } = barkReply;

  return (
    <div className='woof-reply'>
      {barkReply && (
        <>
          <div className='reply-user'>
            <div className='user-profile'>{user.substring(0, 1)}</div>
            <p>{user}</p>
          </div>
          <p className='bark'>{reply}</p>
        </>
      )}
    </div>
  );
}

export default WoofReply;
