import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Classcomponent from './components/classcomponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Classcomponent/>
  </React.StrictMode>
);


