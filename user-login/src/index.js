import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import userLogin from './reducers/reducers'
import {Provider} from 'react-redux'
import App from './components/App'

const store = createStore(userLogin);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)