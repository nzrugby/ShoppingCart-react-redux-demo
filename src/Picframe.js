import React,{Component} from 'react'
import styles from '../General.css'

class Picframe extends Component{

    handleClick(){
        this.props.addToCart(this.props.index1);
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
                        <button onClick={this.addClick(this.props.index1)} className='btn btn-success'><span>Add To Cart</span></button>
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

export default Picframe