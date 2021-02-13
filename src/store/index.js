import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
export default createStore(reducer , applyMiddleware(thunk));