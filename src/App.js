import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import { tsConstructorType } from '@babel/types';

function App() {
  routeChange() {
    let path = '';
    this.prop.history.push(path);
  };
  return (
    <div className="App">
        <div className="center-div">
          <h3>
            Are you a...
          </h3>
          <button className="App-buttons" onClick={this.routeChange}> I'm A Donor!
          </button>
          &nbsp;&nbsp;
          <button className="App-buttons"> I'm a volunteer!</button>
        </div>

    </div>
  );
}

export default App;
