import React from "react";
import "./App.css";

import FeedContainer from './feedContainer';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <h1>Photo Feed</h1>
        <FeedContainer />
      </div>
    );
  }
};

export default App;
