import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const YoutubeEvent = (props) => {
  return (
    <div
      className="youtubeEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    </div>
  )

}

export default YoutubeEvent
