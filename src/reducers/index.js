import { combineReducers } from 'redux';
import game from './game.js';
import chat from './chat.js';

const reducers = combineReducers({
  game,
  chat,
});

export default reducers;
