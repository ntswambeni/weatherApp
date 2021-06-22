import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import Home from './pages/Home';
import WeatherState from './context/weather/WeatherState';

function App() {
  return (
    <Fragment>
      <WeatherState>
        <Router>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Route path="/" exact component={Home} />
          </ThemeProvider>
        </Router>
      </WeatherState>
    </Fragment>
  )
}

export default App;