import React, {Component} from 'react';

export default class Addtobag extends Component{
	constructor(){
		super(...arguments);

	}
	render(){
		return(
				<div className="col-md-3">
                        <p>
                           <button type="button" className="btn btn-primary btn-lg">Add to bag</button>
                        </p>
                </div>
			);
	}
}
