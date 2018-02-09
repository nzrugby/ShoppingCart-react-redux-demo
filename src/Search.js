import React,{Component} from 'react'
import {connect} from 'react-redux'
import { mapDispatchToPropsProductsContainer } from './Reducer/reducer';

class Search extends Component{

    render(){
        const {searchClick} = this.props;
        return(
            <div className='row'>
                <div className='col-md-8 col-md-offset-2'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <input className="form-control"  id="search" type="text" placeholder="Please input here"/>
                        </div>
                        <div className='col-md-3'>
                            <button className="btn" onClick={searchClick}>Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const Search1 = connect(null,mapDispatchToPropsProductsContainer)(Search)
export default Search1
