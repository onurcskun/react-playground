import React from 'react'
import todoApp from './reducers'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import ReactDOM, { render } from 'react-dom'
import App from './component/App'

const store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('wrapper')
)