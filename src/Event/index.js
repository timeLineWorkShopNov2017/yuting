import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js'

const Event = (props) => (
  <div
    className="eventPoint"
    style={{
      left: `${getTimeInPercentage(props.event.start)}%`,
    }}
  >
  </div>
)

export default Event
