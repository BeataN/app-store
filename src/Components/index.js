import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import AppList from './appList'
import '../Styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppList />
      </div>
    );
  }
}

export default App;
