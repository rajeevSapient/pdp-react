import React, {Component} from 'react';
import swatchStore from '../store/swatchStore';

export default class Quantity extends Component{
	
	constructor(){
		
		super(...arguments);

		this.state={
			quantity: 1
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	update(){
		this.setState({
			quantity: 1
		});
	}

	componentDidMount(){
	    this.pdpSubscription = swatchStore.addListener(() => this.update());
  	}

  	componentWillUnmount(){
    	this.pdpSubscription.remove();
  	}

	increment(){
		this.setState(function(previousState, currentProps){
			return {quantity: previousState.quantity + 1};
		});
	}

	decrement(e){
		if(this.state.quantity > 1){
			this.setState(function(previousState, currentProps){
				return {quantity: previousState.quantity - 1};
			});
		}
	}

	render(){
		return(
				<div className="col-md-8">
                        <p>
                           <button type="button" className="btn btn-default" onClick={this.decrement}><strong>-</strong></button>
                           <label className="labelpadding">Qty<input className="qty" name="qty" value={this.state.quantity} readOnly/></label>
                           <button type="button" className="btn btn-default" onClick={this.increment}><strong>+</strong></button>
                        </p>
                </div>
			);
	}
}
