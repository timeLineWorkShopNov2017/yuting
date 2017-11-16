import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js';
import Event from './Event';

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }
  }
  componentDidMount() {
    loadEvents().then(events => {
      const eventWithDuration = events.map((event, index) => {
        const preEvent = events[index+1];
        if (preEvent) {
          const preEventT = new Date(preEvent.start);
          const eventT = new Date(event.start);
          if (preEventT.getDate() === eventT.getDate()) {
            event.duration = event.start - events[index + 1].start
            return event;
          }
          return event;
        }
        return event;
      })
      this.setState({ events: eventWithDuration })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="timelineContainer">
          {this.state.events.map(event => {
            return (
              <Event event={event} key={event.id}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
