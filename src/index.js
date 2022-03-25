import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/styles/index.css';
import EmployeesList from './pages/EmployeesList';
import NewEmployee from './pages/NewEmployee';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'

export const reactDOM = ReactDOM


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/employees-list" element={<EmployeesList />}></Route>
          <Route path="/" element={<NewEmployee />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
