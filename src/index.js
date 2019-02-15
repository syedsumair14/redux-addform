import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import reduce from './components/reducers';
import { showReducer } from './components/reducers';
import {createStore, combineReducers} from 'redux';

const store = combineReducers({reduce, showReducer})
ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(store)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
