import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import {ConnectedSearch} from './components/search'
import reducer from './redux/reducers/index'
import {watchFetchPokes} from './saga/index'

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(watchFetchPokes);

render(
    <Provider store={store}>
        <ConnectedSearch />
    </Provider>,

    document.getElementById('app')
)