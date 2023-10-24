import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

// import store from './store'

import App from './App';

// import { positions, transitions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

// import { ToastContainer } from 'react-toastify';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider>
    <BrowserRouter>
    {/* <ToastContainer /> */}
      <App />
    </BrowserRouter>
  </Provider>

);