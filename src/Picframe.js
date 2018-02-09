import React,{Component} from 'react'
import styles from '../General.css'
import {connect} from 'react-redux'
import {mapDispatchToPropsCart, mapDispatchToPropsPicframe,mapStateToPropsPicframe} from './Reducer/reducer'
class Picframe1 extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let popid = this.props.name + this.props.index1;
        return(
            
            <div className='col-md-6 col-sm-8 col-xs-8'>
            <div style={{'padding-right':'0','margin-right':'0'}}>
                <img src={this.props.source} style={{"cursor":"pointer",'max-width':'100%'}} data-toggle="modal" data-target={"#"+popid}/>
                <div class='row'>
                    <div className='col-md-6'>
                        <h4 style={{'color':'green'}}>{this.props.name}</h4>
                        <h5>Qty: {this.props.quantity}</h5>
                    </div>
                    <div>
                        <button onClick={this.props.onClick} className='btn btn-success'><span>Add To Cart</span></button>
                    </div>
                    
                </div>
                <div className={styles.clear}></div>
                <div className="modal fade" id={popid} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                <div className="modal-dialog">
                            <img src={this.props.source} className={styles.imgPop}/>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

//const Picframe1 = connect(mapStateToPropsPicframe,mapDispatchToPropsPicframe)(Picframe);

export default Picframe1
