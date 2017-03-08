import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import createLogger from 'redux-logger';

import reducers from './reducers';
import App from './Pages/App.js';
import OnlineChecker from './Pages/OnlineChecker.js';
import TicTacToe from './Pages/TicTacToe.js';
import ConnectFour from './Pages/ConnectFour.js';
import RockPaperScissors from './Pages/RockPaperScissors.js';
import UltimateBravery from './Pages/UltimateBravery.js';
import Notes from './Pages/Notes.js';

// const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware,
    promise(),
  ),
);

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={OnlineChecker} />
        <Route path="/onlineChecker" component={OnlineChecker} />
        <Route path="/tictactoe" component={TicTacToe} />
        <Route path="/connectfour" component={ConnectFour} />
        <Route path="/rockpaperscissors" component={RockPaperScissors} />
        <Route path="/ultimatebravery" component={UltimateBravery} />
        <Route path="/notes" component={Notes} />
      </Route>
    </Router>
  </Provider>,
  root
);
