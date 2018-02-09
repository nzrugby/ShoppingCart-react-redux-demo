import { combineReducers } from '../../../app4-redux/node_modules/redux';
import {connect} from 'react-redux'
function clickSearch(index){
    var search = document.getElementById('search').value;
    return{
        type:'SEARCH',
        input:search
    }
}

function clickAddItem(index){
    return{
        type:'ADD_ITEM',
        index:index
    }
}

function clickRemoveItems(index){
    return{
        type:'REMOVE_ITEMS',
        index:index
    }
}

function clickPreview(){
    return{
        type:'PREVIEW'
    }
}

function clickCart(){
    return{
        type:'CART'
    }
}

export function mapStateToPropsProductsContainer(state){
    return{
        products:state.addOrRemoveItemReducer.products,
        searchResults:state.addOrRemoveItemReducer.searchResults,
        searchMode:state.addOrRemoveItemReducer.searchMode
    }
}
                
export function mapDispatchToPropsProductsContainer(dispatch){
    return{
        addClick:(index)=>dispatch(clickAddItem(index)),
        searchClick:(text)=>dispatch(clickSearch(text)),
    }
}

export function mapStateToPropsCart(state){
    return{
        selectProducts:state.addOrRemoveItemReducer.selectProducts,
        showCart1:state.addOrRemoveItemReducer.ShowCart1,
        dataChanged:state.addOrRemoveItemReducer.dataChanged
    }
}

export function mapDispatchToPropsCart(dispatch){
    return{
        clickRemove:(index)=>dispatch(clickRemoveItems(index)),
        cartClick:()=>dispatch(clickCart())
    }
}

let initialState2 = {
                    ShowCart1:true,
                    dataChanged:false,
                    searchMode:false,
                    searchResults:[],
                    selectProducts:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99',"quantity":0},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59',"quantity":0},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":0},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99',"quantity":0}],
                    products:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99',"quantity":10},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59',"quantity":8},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":15},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99',"quantity":5}]}
//clickAddItem
function addOrRemoveItemReducer(state=initialState2,action){
    
    
    switch(action.type){
        case 'ADD_ITEM':
            let n = parseInt(action.index);
            //Here deepclone must be used. Otherwise this reducer is not pure.
            let productsCopy = JSON.parse(JSON.stringify(state.products))
            let selProductsCopy = JSON.parse(JSON.stringify(state.selectProducts))
            let searchResultsCopy = JSON.parse(JSON.stringify(state.searchResults))
            
            if(productsCopy[n].quantity>0){
                productsCopy[n].quantity--;
                selProductsCopy[n].quantity++;
                if(state.searchMode){
                    searchResultsCopy[0].quantity--;
                }
            }
            else{
                alert("Sorry,out of stock.")
            }
            
            return  {
                    ShowCart1:state.ShowCart1,
                    selectProducts:selProductsCopy,
                    products:productsCopy,
                    searchMode:state.searchMode,
                    searchResults:searchResultsCopy,
                    dataChanged:state.dataChanged
                }
        
        case 'REMOVE_ITEMS':
            const originalQty = [10,8,15,5];
            let productsCopy1 = JSON.parse(JSON.stringify(state.products))
            let selProductsCopy1 = JSON.parse(JSON.stringify(state.selectProducts))
            let searchResultsCopy1 = JSON.parse(JSON.stringify(state.searchResults))
            const pname=selProductsCopy1[action.index].name;
            selProductsCopy1[action.index].quantity=0;
            productsCopy1[action.index].quantity = originalQty[action.index];
            if(state.searchMode){
                searchResultsCopy1[0].quantity = originalQty[action.index];
            }   
            
            return {
                ShowCart1:state.ShowCart1,
                selectProducts:selProductsCopy1,
                searchResults:searchResultsCopy1,
                products:productsCopy1,
                searchMode:state.searchMode,
                dataChanged:true
            }   
            
        case 'SEARCH':
            let finditem = false;
            if(action.input==""){
                return {
                    ShowCart1:state.ShowCart1,dataChanged:state.dataChanged,searchMode:false,searchResults:[],selectProducts:state.selectProducts,products:state.products
                }
            }
            else{
                let tmpProducts = [];
                for(var i=0;i<state.products.length;i++){
                    if(state.products[i].name == action.input){
                        let pcopy = JSON.parse(JSON.stringify(state.products[i]));
                        tmpProducts.push(pcopy);
                        finditem = true;
                        break;
                    }
                }
                return {
                    ShowCart1:state.ShowCart1,dataChanged:state.dataChanged,searchMode:true,searchResults:tmpProducts,qty:state.qty,selectQty:state.selectQty,selectProducts:state.selectProducts,products:state.products,dataChanged:state.dataChanged
                }
            }
        case 'CART':
            return{ShowCart1:!state.ShowCart1,dataChanged:false,searchMode:state.searchMode,searchResults:state.searchResults,selectProducts:state.selectProducts,products:state.products,dataChanged:state.dataChanged}    
        default:
            return state;
    }

}


export const rootReducer = combineReducers({addOrRemoveItemReducer})




