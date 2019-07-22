import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.scss';
import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app')
);
