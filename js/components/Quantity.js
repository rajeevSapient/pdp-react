import React, {Component} from 'react';

export default class Quantity extends Component{
	constructor(){
		super(...arguments);

	}
	render(){
		return(
				<div className="col-md-8">
                        <p>
                           <button type="button" className="btn btn-default" disabled="disabled"><strong>-</strong></button>
                           <span>Qty </span><span title="quantity">1</span>
                           <button type="button" className="btn btn-default"><strong>+</strong></button>
                        </p>
                </div>
			);
	}
}
