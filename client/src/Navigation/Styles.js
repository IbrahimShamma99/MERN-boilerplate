import styled from "styled-components";

const Styles = (theme) => {
    console.log("NAV THEME=",theme)
    return {
  H4:  styled.h4`
    font-family: "Times New Roman", Times, serif;
  `,
  H5: styled.h5`
    font-family: "Times New Roman", Times, serif;
  `
    }
};

export default Styles;
