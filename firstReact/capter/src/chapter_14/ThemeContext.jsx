import React from "react";

//=== 1. Context 생성
const ThemeContext = React.createContext();
//=== 2. Context 명명
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;