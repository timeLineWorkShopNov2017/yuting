import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js';
import FacebookEvent from './FacebookEvent';
import GoogleEvent from './GoogleEvent';
import YoutubeEvent from './YoutubeEvent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      facebookEvents: [],
      googleEvents: [],
      youtubeEvents: [],
      timer: null,
      counter: 0,
    }
  }
  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  componentDidMount() {
    loadEvents().then(events => {
      const facebookEvents = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('facebook') >= 0) {
          return true;
        }
        return false;
      })
      const googleEvents  = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('google') >= 0) {
          return true;
        }
        return false;
      })
      const youtubeEvents = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('youtube') >= 0) {
          return true;
        }
        return false;
      })
      this.setState({ facebookEvents, googleEvents, youtubeEvents})
      this.setState({ timer: setInterval(this.tick, 1000)}); //1000ms = 1 sec
    })

  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <div className="App">
        <div className="timelineContainer">
          {this.state.facebookEvents.map(event => {
            return (
              <FacebookEvent event={event} key={event.id}/>
            )
          })}
          {this.state.googleEvents.map(event => {
            return (
              <GoogleEvent event={event} key={event.id}/>
            )
          })}
          {this.state.youtubeEvents.map(event => {
            return (
              <YoutubeEvent event={event} key={event.id}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
