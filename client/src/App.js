import React, { useState } from "react";
import UserComponent from "./USER/";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import { GlobalStyles } from "./Styles/global";
import Layout from "./Components/Layout";
import { connect } from "react-redux";
import NavigationBar from "./Navigation";
import * as utilTypes from "./UtilStore/util.actions";
const mapStateToProps = (state) => {
  return {
    theme: state.util.theme,
    checked: state.util.checked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleTheme: () => dispatch({ type: utilTypes.TOGGLE_THEME}),
  };
};
function App(props) {
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
    <ThemeProvider theme={props.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <React.Fragment>
      <NavigationBar switchTheme={<Layout 
        checked={props.checked} 
        onChange={props.ToggleTheme} />}/>
        <UserComponent/>
      </React.Fragment>
    </ThemeProvider>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
