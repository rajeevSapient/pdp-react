import React, {Component} from 'react';

export default class Size extends Component{
	constructor(){
		super(...arguments);
		this.state = {
			size: [{id: 1, label: '30'}, {id: 2, label: '32'}],
			selectedSize: '',
			selectedSizeLabel: 'Select'
		};
		this.sizeClick = this.sizeClick.bind(this);
	}
	sizeClick(e){
		this.setState({
			selectedSizeLabel: 'Selected',
			selectedSize: e.target.value
		});
	}
	render(){
		return(
				<div className="row">
					<hr/>
	      			<p>{this.state.selectedSizeLabel} Size: {this.state.selectedSize}</p>
	      			{this.state.size.map(function(size){
	      				return(
	      					<div key={size.id}>
	      						<input type="radio" name="size" onClick= {this.sizeClick} id={size.label}size value= {size.label}/>
	      						<label htmlFor={size.label}size>{size.label}</label>
	      					</div>
	      					);
	      			}, this)}
	      			
	      		</div>
			);
	}
}
