import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import SearchBar from './components/searchBar/SearchBar';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar/>
        <SearchBar/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
