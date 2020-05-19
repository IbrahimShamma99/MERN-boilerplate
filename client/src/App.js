import React, { useState } from "react";
import Switcher from "./Switcher";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Layout from "./Layout";

function App() {
  const [theme, setTheme] = useState("light");
  const [checked, setCheck] = useState(true);

  const toggleCheck = () => {
    if (checked) {
      setCheck(false);
      setTheme("dark");
    } else {
      setCheck(true);
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <React.Fragment>
        <Switcher
          switchTheme={<Layout checked={checked} onChange={toggleCheck} />}
        />
      </React.Fragment>
    </ThemeProvider>
  );
}
export default App;
