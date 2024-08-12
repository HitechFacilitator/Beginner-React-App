import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Counters from './components/countersComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Counters />
  </StrictMode>
);
