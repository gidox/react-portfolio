import React, { Component } from 'react';
import { Background } from './App.style';
import NavMenu from 'components/NavMenu/NavMenu';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <Background />
        {this.props.children}
      </div>
    );
  }
}

export default App;
