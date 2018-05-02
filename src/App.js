import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Blabla'
  }

  usernameChangedHandler = (event=>{
    this.setState({
      username: event.target.value
    })
  })

  render() {
    const style = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid #555',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textTransform:'center'
    };

    return (
      <div className="App">
        <p style={style}> This is my first assignment</p>
        <UserInput
          username={this.state.username}
          changed={this.usernameChangedHandler}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
      </div>
    );
  }
}

export default App;
