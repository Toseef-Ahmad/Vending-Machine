import React from 'react';
import './Message.css';

const Message = (props) => {
  return (
    <>
      <div className="Message-container">{props.children}</div>
    </>
  );
};

export default Message;
