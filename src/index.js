import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
	<Router>
		<App />
	</Router>
  </Provider>,
  document.getElementById('root'), () => console.log('rendered')
);
