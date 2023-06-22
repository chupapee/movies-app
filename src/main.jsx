import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@app/index';

import { store } from './app/store';

import './style.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
