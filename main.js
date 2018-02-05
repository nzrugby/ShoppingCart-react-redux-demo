import React from 'react';
import {render} from 'react-dom';
//import Greeter from './Greeter';
import Shopping1 from './src/Shopping'
import './General.css'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './src/Reducer/reducer'
//import 'bootstrap/css/bootstrap.css'

let store = createStore(reducer)
const ShopCart = connect(mapStateToProps,mapDispatchToProps)(Shopping1)

render(
    <Provider store={store}>
        <Shopping1 />
    </Provider>,
    document.getElementById('root')
);