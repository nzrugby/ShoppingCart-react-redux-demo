import React,{Component} from 'react'
import Picframe from './Picframe'
import styles from '../General.css'


class ProductsContainer extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        //const arr = [{'path':'/images/apple.jpg','name':'apple','quantity':this.state.qty.apple},{'path':'/images/pear.jpg','name':'pear','quantity':this.state.qty.pear},{'path':'/images/watermelen.jpg','name':'watermelen','quantity':this.state.qty.watermelen},{'path':'/images/banana.jpg','name':'banana','quantity':this.state.qty.banana}];
        if(this.props.products.length!=0){
                return(
                    <div className='col-md-10'>
                    {
                        this.props.products.map((item,index)=><Picframe addToCart={this.props.addCart} quantity={this.props.qty[index]} source={item.path} key={index} index1={index} name={item.name}/>)
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

export default ProductsContainer