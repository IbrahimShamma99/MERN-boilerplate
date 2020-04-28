import React from 'react';
import NavigationBar from "./Navigation/Naviagation"
import Switcher from "./Switcher";
import  { BreakpointProvider } from 'react-socks';


function App() {
  return (
    <React.Fragment>
      <BreakpointProvider>
        <NavigationBar/>
        <Switcher/>
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
