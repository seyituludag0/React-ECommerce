import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
// import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "../src/contexts/UserContext"
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
