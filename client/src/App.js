import React from 'react';
import Switcher from "./Switcher";
import  { BreakpointProvider } from 'react-socks';

function App(props) {
  return (
    <React.Fragment>
      <BreakpointProvider>
        <Switcher/>
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
