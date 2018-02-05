import React,{Component} from 'react'

class Search extends Component{

    handleClick(){
        var search = document.getElementById('search').value;
        this.props.searchItem(search);
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-8 col-md-offset-2'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <input className="form-control"  id="search" type="text" placeholder="Please input here"/>
                        </div>
                        <div className='col-md-3'>
                            <button className="btn" onClick={this.handleClick.bind(this)}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search