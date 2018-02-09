import React,{Component} from 'react'
import Picframe1 from './Picframe'
import styles from '../General.css'
import {connect} from 'react-redux'
import {mapStateToPropsProductsContainer,mapDispatchToPropsProductsContainer} from './Reducer/reducer'

class ProductsContainer extends Component{
    render(){
        let {products,addClick,searchMode,searchResults} = this.props;
        //normal display mode
        if(!searchMode){
            return(
                <div className='col-md-10'>
                {
                    products.map((item)=><Picframe1 source={item.path} quantity={item.quantity} name={item.name} key={item.index} index1={item.index} onClick={()=>addClick(item.index)}/>)
                }
                </div>
            )
        }
        //search mode
        else{
            if(searchResults.length!=0){
                return(
                    <div className='col-md-10'>
                    {
                        searchResults.map((item)=><Picframe1 source={item.path} quantity={item.quantity} name={item.name} key={item.index} index1={item.index} onClick={()=>addClick(item.index)}/>)
                    }
                    </div>
                )
            }
            else{
                return(
                    <div className='col-md-6'>
                        Sorry, no product found!
                    </div>
                )
            }    
        }
    }
}

const ProductsContainer1 = connect(mapStateToPropsProductsContainer,mapDispatchToPropsProductsContainer)(ProductsContainer)

export default ProductsContainer1
