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
      this.setState({ events })
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
