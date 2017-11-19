import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers'
import thunk from 'redux-thunk';

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
);
