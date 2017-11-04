import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import createReducer from './reducer/create';
const store = createReducer();

ReactDOM.render(<Provider store={store}>
    <div>
        <App />
    </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
