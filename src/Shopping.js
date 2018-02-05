import React,{Component} from 'react'
import Cart from './Cart'
import ProductsContainer from './ProductsContainer'
import Search from './Search'

class Shopping1 extends Component{
    constructor(){
        super();
        /*
        this.state = {
            qty:[10,8,15,5],
            products:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99',"quantity":10},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59',"quantity":8},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":15},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99',"quantity":5}],
            selectProducts:[],
            selectQty:[0,0,0,0],
            filterProducts:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99'},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59'},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99'},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99'}]
        }
        */
    }

    /*
    addCart(index){
        let currentQty = this.state.qty;
        let selQty = this.state.selectQty;

        console.log(currentQty);
        if(currentQty[parseInt(index)]>0){
            currentQty[parseInt(index)]--;
            selQty[parseInt(index)]++;
            //this.state.qty[parseInt(index)] = currentQty[parseInt(index)];
        }
        else{
            alert("Sorry,out of stock.")
        }

        

        let cart = this.state.selectProducts;
        //reQty[parseInt(index)] = 
        //this.setState({qty:currentQty})
        var item = this.state.products[parseInt(index)];
        cart.push(item.name);
        this.setState({selectProducts:cart,selectQty:selQty,qty:currentQty})
    }

    
    searchItem(itemName){
        const productsModel=[{'index':'0','path':'/images/apple.jpg','name':'apple'},{'index':'1','path':'/images/pear.jpg','name':'pear'},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen'},{'index':'3','path':'/images/banana.jpg','name':'banana'}];    
        let finditem = false;
        if(itemName==""){
            this.setState({filterProducts:productsModel});
        }
        else{
            for(var i=0;i<productsModel.length;i++){
                if(productsModel[i].name == itemName){
                    let tmpProducts = [];
                    tmpProducts.push(productsModel[i]);
                    this.setState({filterProducts:tmpProducts});
                    finditem = true;
                    break;
                }
            }
            if(!finditem){
                this.setState({filterProducts:[]});
            }
        }
    }
    */
    /*
    handleRemove(id){
        const originalQty = [10,8,15,5];
        const productsModel=[{'index':'0','path':'/images/apple.jpg','name':'apple'},{'index':'1','path':'/images/pear.jpg','name':'pear'},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen'},{'index':'3','path':'/images/banana.jpg','name':'banana'}];    
        const selProducts = this.state.selectProducts;
        const pname=productsModel[id].name;
        for(var i=0;i<selProducts.length;i++){
            var index = selProducts.indexOf(pname);
            if (index > -1) {
                selProducts.splice(index, 1);
            }
        }
        let a;
        let selQty = this.state.selectQty;
        selQty[id] = 0;
        let tmpQty = this. state.qty;
        tmpQty[id] = originalQty[id];
        this.setState({selectProducts:selProducts,selectQty:selQty,qty:tmpQty})
        
    }
    */
    render(){
        return(
            <div>
            <div className='row'>
            <div className='col-md-6 col-md-offset-2'>
                <h1 style={{'color':'green'}}>Welcome To ReactFruit Cart</h1>
            </div>
            </div>    
            <div className='Container'>
                <div className='row' style={{"margin-left":"5%"}}>
                    <div className='col-md-8'>
                        <Search searchItem={this.searchItem.bind(this)}/>
                        <hr/>
                        <ProductsContainer   addCart={this.addCart.bind(this)}  products={this.state.filterProducts} qty={this.state.qty}/>
                    </div>
                    <div className='col-md-3'>    
                        <Cart  handleRemove={this.handleRemove.bind(this)}  selectProducts={this.state.selectProducts} qty={this.state.selectQty} pModel={this.state.products}/>
                    </div>
                </div>    
                <div className='row' style={{"margin-left":"5%"}}>    
                    <div className='col-md-8'>
                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Shopping1