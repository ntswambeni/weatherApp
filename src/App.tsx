import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
