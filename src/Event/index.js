import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import { getRandomInt } from '../lib/getRandomInt.js';
import { getFrequentWords } from '../lib/nlpHelpers.js';

const colors = ['red', 'green', 'blue', 'yello'];

const Event = (props) => {
  const size = getRandomInt(1, 100);
  return (
    <div
      className="eventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
        background: `${colors[getRandomInt(0, 3)]}`,
        top: `${getTimeInPercentage(props.event.start)}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
      }}
    >
      <div className="eventLabel">
        {getFrequentWords(props.event.targettedResource.plainTextContent, 1)}
      </div>
    </div>
  )
}

export default Event
