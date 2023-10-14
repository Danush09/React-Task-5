import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dob: '',
      age: null,
    };
  }

  calculateAge = () => {
    const dob = new Date(this.state.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    this.setState({ age });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'blue',  
      color: 'white',          
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    };

    return (
      <div className="App" align="center">
        <h1>Age Calculator</h1>
        <label>Enter your Date of Birth: </label>
        <input
          type="date"
          value={this.state.dob}
          onChange={(e) => this.setState({ dob: e.target.value })}
        />
        <br /> <br /> <br />
        <button style={buttonStyle} onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age && (
          <h1>You are {this.state.age} years old.</h1>
        )}
      </div>
    );
  }
}

export default App;
