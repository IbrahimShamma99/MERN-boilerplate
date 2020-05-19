import React, { useState } from "react";
import Switcher from "./Switcher";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Switch from "react-switch";

function App() {
  const [theme, setTheme] = useState('light');
  const [checked,setCheck] = useState(true);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  const toggleCheck = ()=>{
    if (checked){
      setCheck(false);
      setTheme("dark");
    }
    else{
      setCheck(true);
      setTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <React.Fragment>
        <Switcher switchTheme={
          <Switch
          checked={checked}
          onChange={toggleCheck}
          onColor="#333333"
          offColor="#AAAAAA"
          onHandleColor="#999999"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />  
    
        } />
      </React.Fragment>
    </ThemeProvider>
  );
}
export default App;
