import React from 'react';
import NavigationBar from "./Navigation/Naviagation"
import Switcher from "./Switcher";
import Aux from "./hoc";
import  { BreakpointProvider } from 'react-socks';


function App() {
  return (
    <Aux>
      <BreakpointProvider>
        <NavigationBar/>
        <Switcher/>
      </BreakpointProvider>
    </Aux>
  );
}

export default App;
