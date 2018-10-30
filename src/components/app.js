import React, { Component } from 'react';
import About from './about.js';
import Home from './home.js';
import Recent from './recent.js';
import Near from './near.js';
import Far from './far.js';

class App extends Component {
  constructor() {
    super();
  }

  // <Home />
  // <Recent />
  // <Near />
  // <Far />
  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default App;
