import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RepositoriesProvider } from './context/RepositoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <RepositoriesProvider>
    <App />
    </RepositoriesProvider>
  </BrowserRouter>
);

