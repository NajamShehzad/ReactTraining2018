import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Najam',
      age: 21,
      con: true
    }
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({
      name:this.state.con ?' & Hello World!':'& Hello Pakistan!',
      con:!this.state.con
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.update()} className="App-title">Welcome to React {this.state.name}</h1>
        </header>
        <div>
          <button style={{padding:'7px',margin:'5px'}} onClick={this.update}>Click Here</button>
        </div>
      </div>
    );
  }
}

export default App;
