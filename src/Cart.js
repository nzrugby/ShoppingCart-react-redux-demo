import React,{Component} from 'react'
import { TransitionGroup } from 'react-transition-group'
import EmptyCart from './EmptyCart'
import styles from '../Cart.css'
import {connect} from 'react-redux'
import {mapStateToPropsCart, mapDispatchToPropsCart} from './Reducer/reducer'
import CartItem from './CartItem'
class Cart extends Component{
    render(){
        const {selectProducts,cartClick,showCart1,clickRemove,dataChanged} = this.props;
        
        let cartItems=[];
        let view;
        let totalPrice = 0;
        for(var i=0;i<selectProducts.length;i++){
            if(selectProducts[i].quantity>0){
                cartItems.push(selectProducts[i]);        
            }
        }
       
        view = cartItems.length==0? 
                <EmptyCart/>:
                cartItems.map(product=>
                    <CartItem className="cart-item" 
                            key={product.name} 
                            image={product.path}
                            title={product.name} 
                            price={product.price}
                            quantity={product.quantity}
                            totalPrice={product.quantity*product.price}
                            onRemove={()=>clickRemove(product.index)}/>
                )

        return(
            
            <div className="container" style={{"padding": "100px 50px 10px;"}} >
                <button id="popbtn" type="button" className="btn btn-success" 
                        onClick={cartClick}>
                    Your Cart
                </button> 
                <div>
                    {showCart1 ? "" : view}
                </div>   
                
            </div>
        )
        
    }
}

const Cart1 = connect(mapStateToPropsCart,mapDispatchToPropsCart)(Cart)

export default Cart1
