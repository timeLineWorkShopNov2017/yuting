import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const Event = (props) => {
  const size = props.event.duration / 30000;
  const t = new Date(props.event.start);
  const dateOfMonth = t.getDate()
  return (
    <div
      className="eventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
        top: `${dateOfMonth * 5}px`
      }}
    >
    </div>
  )
}

export default Event
