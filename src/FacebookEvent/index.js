import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const FacebookEvent = (props) => {
  return (
    <div
      className="facebookEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    </div>
  )

}

export default FacebookEvent
