import React, {Component} from 'react';
import swatchStore from '../store/swatchStore';
import sizeStore from '../store/sizeStore';

export default class Progress extends Component{

	constructor(){
		super(...arguments);
		this.state={
			width: '0%'
		}
	}

	update(){
		this.setState({
			width: sizeStore.getData() ? '100%': '50%'
		});
	}

	componentDidMount(){
	    this.pdpSubscription = [swatchStore.addListener(() => this.update()), sizeStore.addListener(() => this.update())];
  	}

  	componentWillUnmount(){
    	this.pdpSubscription.remove();
  	}

	getStyle(){
		return{
			width: this.state.width
		};
	}

	render(){
		return(
				<div className="row">
					<div className="progress">
		  				<div className="progress-bar" style={this.getStyle()}></div>
					</div>
				</div>
			);
	}

}
