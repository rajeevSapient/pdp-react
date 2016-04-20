import React, {Component} from 'react';
import PDPAction from '../action/PdpAction';
import store from '../store/sizeStore';
import swatchStore from '../store/swatchStore';

export default class Size extends Component{
	
	constructor(){
		super(...arguments);
		this.state = {
			size: ['32','33','34','35'],
			selectedSize: '',
			selectedSizeLabel: 'Select',
			swatchSelected: false,
			selectedSizeClass: ''
		};
		this.sizeClick = this.sizeClick.bind(this);
	}

	filterSize(){
	  	let swatchData = this.props.swatchObj[swatchStore.getData().value], availableSizes = [];
	  	Object.keys(swatchData.sizes).map((key) => availableSizes.push(key));
	  	this.setState({
	  		size: availableSizes,
	  		selectedSize: '',
  			selectedSizeLabel: 'Select',
  			swatchSelected: true
	  	});
  	}

	componentDidMount(){
	    this.pdpSubscription = swatchStore.addListener(() => this.filterSize());
  	}

  	componentWillUnmount(){
    	this.pdpSubscription.remove();
  	}

	sizeClick(e){
		if(this.state.swatchSelected === true){
			this.setState({
				selectedSizeLabel: 'Selected',
				selectedSize: e.target.value
			});
			PDPAction.sizeClick(e.target.value);
		}
	}

	render(){
		return(
				<div className="row">
					<hr/>
	      			<p>{this.state.selectedSizeLabel} Size: {this.state.selectedSize}</p>
	      			{this.state.size.map(function(size, index){
	      				return(
	      					<div key={index} className="sizefloat">
	      						<label><span>{size}</span><input type="radio" name="size" onClick= {this.sizeClick} value= {size}/></label>
	      					</div>
	      					);
	      			}, this)}
	      			
	      		</div>
			);
	}
}
