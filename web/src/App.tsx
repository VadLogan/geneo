import React, { Component } from 'react';
import logo from './logo.svg';
import Button from "./components/Button";
import { observer } from "mobx-react"  
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            tsss <code>sc/App.tsx</code> 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >   

          </a>
           <Button 
             red
              buttonContent="check"
              onClick={()=> console.log("hello")}
            /> 
        </header>
      </div>
    );
  }
}

export default App;
