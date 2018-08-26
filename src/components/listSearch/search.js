import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const items = ['Dragon Ball Super', 'One Piece', 'Naruto', 'Assasisans Creed', 'My Hero Academia', 'Death Note', 'Attack on Titian', 'Pokemon', 'Shadow Dragon', 'Call of Duty']

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Najam',
      age: 21,
      con: true,
      value: '',
      text: '',
      result: []
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
    });
    const result = items.filter((item) => {
      let lowerItem = item.toLowerCase();
      let lowerValue = value.toLowerCase();
      // const sub = lowerItem.substring(0, value.length)
      // return lowerItem.includes(lowerValue);
      // return lowerItem.substring(0, value.length).indexOf(lowerValue) !== -1

      //More Efficent Ways
      // return lowerItem.startsWith(lowerValue);
      return !lowerItem.indexOf(lowerValue);
    });
    console.log(result);
    this.setState({
      result
    })
  }

  onSubmit(event) {
    const text = this.state.value;
    event.preventDefault();
    this.setState({
      name: text,
      text
    });
    console.log(this.state.value);
  }








  header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={() => this.update()} className="App-title">Welcome to React {this.state.name}</h1>
      </header>
    )
  }

  searchBody() {
    return (
      <div>
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
    )
  }

  itemBody() {
    const {result,value} = this.state

    let itemToServer = value ? result:items; 

    return (
      <div>
        <ol>
          {
            itemToServer.map((item, index) => <li key={item + index} >{item}</li>)
          }
        </ol>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.header()}
        {this.searchBody()}
        {this.itemBody()}
      </div>
    );
  }
}

export default App;
