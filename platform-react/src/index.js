import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//apos realizar a instalacao via npm do react-bootstrap (npm install react-bootstrap bootstrap - no terminal), incluir a importacao do dist/css/bootstrat e ele ja traz a estilizacao do BS aqui no arquivo HTML
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


