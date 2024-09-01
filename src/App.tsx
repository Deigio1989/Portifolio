import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import EstiloGlobal, {Container}  from './styles';
import Sidebar from './containers/Sidebar';
import About from './containers/About';
import Projects from './containers/Projects';
import lightTheme from './themes/ligth';
import darkTheme from './themes/dark';


function App() {
  const [isDarkTheme, setDarkTheme] = useState(false)

  function changeTheme(){
    setDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal/>
      <Container>
        <Sidebar themeChange={changeTheme}/>
        <main>
          <About/>
          <Projects/>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
