import { Component } from 'react';
import '../style/Clock.css';

class Clock extends Component {
  state = { time : "asdasd" }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    this.time = setInterval(() => this.tick(),1000)
  }

  componentWillUnmount() { 
    clearInterval(this.time)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.time}
        </header>
      </div>
    );
  }
}

export default Clock;
