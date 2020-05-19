import React from "react";
import moon from "./logos/moon.png";
import sun from "./logos/sun.png";
import Toggle from "./Toggle";
import { lightTheme, darkTheme } from "./theme";

/**
 *   const [theme, setTheme] = useState('light');
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

 */

class Layout extends React.Component {

  componentDidMount() {
    if (this.props.theme === "light") {this.setState({ theme: "dark" });}
    else {this.setState({ theme: "light" });}
  }
  render() {
    return (
      <div>
        {this.props.theme !== null ? (
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
        ) : (
          <div style={{ height: "24px" }} />
        )}
      </div>
    );
  }
}
export default Layout;
