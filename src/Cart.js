import React,{Component} from 'react'
import { TransitionGroup } from 'react-transition-group'
import EmptyCart from './EmptyCart'
import styles from '../Cart.css'
class Cart extends Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        //event.preventDefault();
        setTimeout(()=>{this.setState({showCart1: !this.showCart1})},0)
    }

    handleRemove(product,index){
        this.props.handleRemove(index);
        setTimeout(() => {
            this.setState({showCart1:!this.showCart1})
        , 0.1});
        setTimeout(() => {
            this.setState({showCart1:!this.showCart1})
        , 0.2});
    }

    render(){
        let cartItems;
        const selProducts = this.props.selectProducts;

        const len = selProducts.length;
        let view;
        let totalPrice = 0;
        for(var i=0;i<this.props.qty.length;i++){
            totalPrice += this.props.pModel[i].price * this.props.qty[i];
        }
        if(len==0)
        {
            view = <EmptyCart/>
        }
        else{
            cartItems = this.props.qty.map((product,index) =>{
                return(
                    product>0?
                    <li className="cart-item" key={this.props.pModel[index].name}>
                        <img className="product-image" src={this.props.pModel[index].path} />
                        <div>
                            <p>{this.props.pModel[index].name}</p>
                            <p>{this.props.pModel[index].price}</p>
                            <p>Quantity:{product}</p>
                            <p>Total Price:{product*this.props.pModel[index].price}</p>
                        </div>
                        <button onClick={this.clickRemove(index)}>Remove items</button>
                        
                    </li>
                    :null
                )
            });
            
            let items = [];
            for(var i=0;i<cartItems.length;i++){
                items.push(cartItems[i]);
            }
            view = <div>
                    
                     <span>Total price is {totalPrice}</span>
                     <TransitionGroup transitionName="fadeIn" transitionEnterTimeout={1} transitionLeaveTimeout={1} component="ul" className="cart-items">{cartItems}</TransitionGroup>
                   </div>;
        }
        return(
        <div className="container" style={{"padding": "100px 50px 10px;"}} >
            <button id="popbtn" type="button" className="btn btn-success" 
                    onClick={this.cartClick}>
                Your Cart
            </button> 
            <div>
                {this.showCart1 ? "" : view}
            </div>    
        </div>
        )
    }
}

export default Cart
