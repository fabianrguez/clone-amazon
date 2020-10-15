import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);

serviceWorker.register();
