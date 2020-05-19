import React, { useState } from "react";
import Switcher from "./USER/Pages/Switcher";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import { GlobalStyles } from "./Styles/global";
import Layout from "./Components/Layout";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
  };
};
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
export default connect(mapStateToProps,mapDispatchToProps)(App);
