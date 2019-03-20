import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getNotificationsCount() {
    return (Math.random()*10).toFixed(0)
  }
  render() {
    const count = this.getNotificationsCount()
    console.log(count)
    return (
      <div className="App">
        <header className="App-header">
          {count>0
          ?<p>
              Learn React {count}
            </p>
          :<p>
            Learn React none
          </p>
          }
        </header>
      </div>
    );
  }
}

export default App;
