import React from 'react';
import {render} from 'react-dom';
import Shopping1 from './src/Shopping'
import './General.css'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import Cart from './src/Cart'
import ProductsContainer from './src/ProductsContainer'
import {rootReducer,mapStateToProps,mapDispatchToProps} from './src/Reducer/reducer'

let store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Shopping1/>
    </Provider>,
    document.getElementById('root')
);
