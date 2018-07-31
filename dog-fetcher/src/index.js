import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { watchFetchDog } from './sagas/saga'
import { ConnectedApp } from './components/App'
import reducer from './reducers/reducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchDog);

render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,

    document.getElementById('app')
)