import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Najam',
      age: 21,
      con: true,
      value: ''
    }
    this.update = this.update.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }
  update() {
    this.setState({
      name: this.state.con ? ' & Hello World!' : '& Hello Pakistan!',
      con: !this.state.con
    })
  }
  inputChange(value) {
    this.setState({
      value,
    })
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({
      name: this.state.value
    })
    console.log(this.state.value);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.update()} className="App-title">Welcome to React {this.state.name}</h1>
        </header>
        <div>
          <button style={{ padding: '7px', margin: '5px' }} onClick={this.update}>Click Here</button>
        </div>
        <div>
          Type Something And Press Enter:
          <form onSubmit={this.onSubmit}>
            <input
              autoFocus
              type='text'
              value={this.state.value}
              onChange={(event) => this.inputChange(event.target.value)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
