import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import Home from './pages/Home';
import WeatherState from './context/weather/WeatherState';
import AlertState from './context/alert/AlertState';
import Alerts from "./components/layouts/Alerts";
import AlertContainer from "./components/layouts/AlertContainer";

function App() {
  return (
    <Fragment>
      <AlertState>
        <WeatherState>
          <Router>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Route path="/" exact component={Home} />
              <AlertContainer>
                <Alerts/>
              </AlertContainer>
            </ThemeProvider>
          </Router>
        </WeatherState>
      </AlertState>
    </Fragment>
  )
}

export default App;