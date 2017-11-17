import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const GoogleEvent = (props) => {
  return (
    <div
      className="googleEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    </div>
  )

}

export default GoogleEvent
