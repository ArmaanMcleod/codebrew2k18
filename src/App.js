import React, { Component } from 'react';

import HorizontalTimeline from "./Components/HorizontalTimeline";

import './App.css';


const styles = {
  timeline: {
    width: 'center',
    height: '100px',
    margin: '20px',
    fontSize: '15px'
    
  }
}


const VALUES = [ "10-10-1997","10-10-1998","10-10-1999"];

class App extends Component {
  state = { value: 0, previous: 0 };
  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}

        <div style={styles.timeline}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES} />
        </div>
        </div>
    );
  }
}

export default App;
