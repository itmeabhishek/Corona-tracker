import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import districtList from './districtList';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import DistrictData from './districtData';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page2" component={districtList} />
        <Route path="/page3" component={DistrictData} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
