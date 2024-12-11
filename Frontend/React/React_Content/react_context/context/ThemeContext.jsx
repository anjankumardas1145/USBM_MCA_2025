import { createContext } from "react";



 const ThemeContext=create();
 export const ThemeProvider=({children})=>{
const [theme,setTheme]=useState("light");
const toggletheme=()=>{
  setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
};
return(
  <ThemeContext.provider value={{theme,toggletheme}}>
  {children}
  </ThemeContext.provider>
);
 };

 export default ThemeContext;