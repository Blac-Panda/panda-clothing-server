import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import store from './redux/store'
import persistor from './redux/store'

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
