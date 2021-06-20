import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import SearchBar from './components/searchBar/SearchBar';
import Display from './components/display/Display';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar/>
        <SearchBar/>
        <Display temperature={30} icon={"icon"} weekDay={"Monday"} monthDay={"16 de Junho"}/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
