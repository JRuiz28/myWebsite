import React, { useState, useEffect, useContext } from 'react';
import Navbar from './navbar/navbar';
import themeContext from '../context/themes/themeContext';
import '../style/navbar.css';

//Styled Components
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from '../themes.js';

//Materia UI
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[200],
    '&$checked': {
      color: purple[50],
    },
    '&$checked + $track': {
      backgroundColor: purple[50],
    },
  },
  checked: {},
  track: {},
})(Switch);


const Header = () => {

  const themesContext = useContext(themeContext);
  const { cambiarCheck } = themesContext;
  
  //botton para cambiar el tema "Switch"
  const [darkSwitch, setDarkSwitch] = React.useState({ checkedDark: false });

  
  //tomar tema del localStorage
  var themeInitial = localStorage.getItem('theme');
  if(!themeInitial){
    themeInitial = "light";
  }

  // State del tema 'dark o light'
  const [theme, setTheme]= useState(themeInitial);


  //Cada vez que se cambia el tema, guardar en el LocalStorage
  useEffect(() => {
    if(theme !== 'light'){
      localStorage.setItem('theme', "dark");
      setDarkSwitch({ checkedDark: true });
      cambiarCheck(true);
    }
    else{
      localStorage.setItem('theme', "light");
      cambiarCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const handleChange = (event) => {
    setDarkSwitch({ ...darkSwitch, [event.target.name]: event.target.checked });
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        
        <Navbar 
          PurpleSwitch={PurpleSwitch}
          darkSwitch={darkSwitch}
          handleChange={handleChange}
        />

      </StyledApp>
    </ThemeProvider>
  );
}
 
export default Header;