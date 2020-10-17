import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString('it-IT')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString('it-IT')
    });
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="stopwatch-time">{this.state.time}</h1>
        </div>
      </div>
    );
  }
} 

export default Stopwatch;