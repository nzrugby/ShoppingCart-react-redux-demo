import React,{Component} from 'react'
import Cart1 from './Cart'
import ProductsContainer1 from './ProductsContainer'
import {connect} from 'react-redux'
import Search1 from './Search'

class Shopping extends Component{
    render(){
        return(
            
            <div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <h1 style={{'color':'green','margin-left':'12%'}}>Welcome To ReactFruit Cart</h1>
                        <div className='row'>
                            <div className='col-md-10'>
                                <Search1/>
                                <hr/>
                                <ProductsContainer1/>
                            </div>
                            <div className='col-md-1'>
                                <Cart1/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const Shopping1 = connect(null,null)(Shopping);
export default Shopping1
