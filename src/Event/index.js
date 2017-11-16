import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const Event = (props) => {
  const t = new Date(props.event.start);
  const dateOfMonth = t.getDate();
  if (t.getHours() <= 12) {
    return (
      <div
        className="eventPoint"
        style={{
          left: `${t.getDate()*10}px`,
        }}
      >
      </div>
    )
  }
  return (
    <div
      className="eventPoint"
      style={{
        left: `${t.getDate()*10 + 20}px`,
      }}
    >
    </div>
  )

}

export default Event
