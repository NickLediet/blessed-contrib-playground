import * as React from 'react';
import * as blessed from 'blessed';
import { render, } from 'react-blessed';
// import { Bar } from 'react-blessed-contrib';
// Rendering a simple centered box with a bar chart
import { Component } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            box: any
        }
    }
}
class App extends Component {
    render() {
      return (
        // @ts-ignore
        <box top="center"
            left="center"
            width="50%"
            height="50%"
            border={{type: 'line'}}
            style={{border: {fg: 'blue'}}}>
            Hello World!
        </box>
        // <box top="center"
        //      left="center"
        //      width="80%"
        //      height="80%"
        //      border={{type: 'line'}}
        //      style={{border: {fg: 'blue'}}}>
        
            // ref={r => this.barRef = r ? r.widget : null}
        //     label="Server Utilization (%)"
        //     barWidth={4}
        //     barSpacing={6}
        //     xOffset={0}
        //     maxHeight={9}
        //     data={{
        //       titles: ['bar1', 'bar2'],
        //       data: [5, 10]
        //     }}
        //   />
        // </box>
      );
    }
  }
  
  // Creating our screen
  const screen = blessed.screen();
  
  // Rendering the React app using our screen
  const component = render(<App />, screen);
  