import { combineReducers } from '../../../app4-redux/node_modules/redux';

function clickSearch(index){
    var search = document.getElementById('search').value;
    return{
        type:'SEARCH',
        index:search
    }
}

function clickAddItem(index){
    return{
        type:'ADD_ITEM',
        index:index
    }
}

function clickRemoveItems(){
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

export function mapStateToProps(state,action){
    return{
        qty:state.addOrRemoveItemReducer.qty,
        selectProducts:state.addOrRemoveItemReducer.selectProducts,
        selectQty:state.addOrRemoveItemReducer.selectQty,
        filterProducts:state.searchReducer.filterProducts,
        
    }
}

export function mapDispatchToProps(dispatch){
    return{
        addClick:(index)=>dispatch(clickAddItem(index)),
        removeClick:(index)=>dispatch(clickRemoveItems(index)),
        searchClick:(text)=>dispatch(clickSearch(text)),
        cartClick:()=>dispatch(clickCart())
    }
}

//clickCart
let initialState0 = {ShowCart1:false}
function clickCartReducer(state=initialstate0,action){
    switch(action.type){
        case 'CART':
            return{ShowCart1:!state.ShowCart1}
        default:
            return state;    
    }
}


//clickSearch 
let initialstate1 = {filterProducts:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99'},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59'},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99'},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99'}]}; 
function searchReducer(state=initialstate1,action){
    switch(action.type){
        case 'SEARCH':
            const productsModel=[{'index':'0','path':'/images/apple.jpg','name':'apple'},{'index':'1','path':'/images/pear.jpg','name':'pear'},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen'},{'index':'3','path':'/images/banana.jpg','name':'banana'}];    
            let finditem = false;
            if(action.input==""){
                return {filterProducts:productsModel};
            }
            else{
                let tmpProducts = [];
                for(var i=0;i<productsModel.length;i++){
                    if(productsModel[i].name == itemName){
                        
                        tmpProducts.push(productsModel[i]);
                        finditem = true;
                        break;
                    }
                }
                return {filterProducts:tmpProducts};
            }
        default:
            return state;
    }
}


let initialState2 = {qty:[10,8,15,5],selectQty:[0,0,0,0],selectProducts:[]}
//clickAddItem
function addOrRemoveItemReducer(state=initialState2,action){
    products:[{'index':'0','path':'/images/apple.jpg','name':'apple','price':'4.99',"quantity":10},{'index':'1','path':'/images/pear.jpg','name':'pear','price':'3.59',"quantity":8},{'index':'2','path':'/images/watermelen.jpg','name':'watermelen','price':'6.99',"quantity":15},{'index':'3','path':'/images/banana.jpg','name':'banana','price':'2.99',"quantity":5}];
    switch(action.type){
        case 'ADD_ITEM':
            let currentQty = state.qty;
            let selQty = state.selectQty;
            if(currentQty[parseInt(index)]>0){
                currentQty[parseInt(index)]--;
                selQty[parseInt(index)]++;
            }
            else{
                alert("Sorry,out of stock.")
            }

            let cart = state.selectProducts;
            var item = products[parseInt(index)];
            cart.push(item.name);
            return{
                selectProducts:cart,selectQty:selQty,qty:currentQty
            }
        
        case 'REMOVE_ITEMS':
            const originalQty = [10,8,15,5];
            const productsModel=[{'name':'apple'},{'name':'pear'},{'name':'watermelen'},{'name':'banana'}];    
            const selProducts = state.selectProducts;
            const pname=productsModel[action.index].name;
            for(var i=0;i<selProducts.length;i++){
                var index = selProducts.indexOf(pname);
                if (index > -1) {
                    selProducts.splice(index, 1);
                }
            }
            selQty = state.selectQty;
            selQty[action.index] = 0;
            let tmpQty = state.qty;
            tmpQty[action.index] = originalQty[action.index];
            return {
                selectProducts:selProducts,selectQty:selQty,qty:tmpQty
            }    
        default:
            return state;
    }

}

//clickPreview
function previewReducer(state,action){
    switch(action.type){
        case 'PREVIEW':
            return state
        default:
            return state;
    }
}

export const rootReducer = combineReducers({clickCartReducer,searchReducer,addOrRemoveItemReducer,previewReducer})

 

