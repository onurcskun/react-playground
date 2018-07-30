import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import userLogin from './reducers/reducers'
import {Provider} from 'react-redux'
import Routes from './components/Routes'

const store = createStore(userLogin);

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
)