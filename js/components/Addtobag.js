import action from '../action/PdpAction';
import store from '../store/addtobagStore';
import React, {Component} from 'react';
import swatchStore from '../store/swatchStore';
import sizeStore from '../store/sizeStore';

export default class Addtobag extends Component{
	
	constructor(){
		super(...arguments);
		this.state={
			disabled: true
		}
	}

	toggleButton(){

		let swatchLabel = swatchStore.getData().value,
			size = sizeStore.getData() || undefined,
			enableButton;

		if(swatchLabel !== undefined && this.props.swatchObj[swatchLabel].sizes === undefined){
			enableButton = false;
		}else if(swatchLabel !== undefined && this.props.swatchObj[swatchLabel].sizes !== undefined && size === undefined){
			enableButton = true;
		}else if(swatchLabel !== undefined && this.props.swatchObj[swatchLabel].sizes !== undefined && size !== undefined){
			enableButton = false;
		}

		this.setState({
			disabled: enableButton
		});
	}

	componentDidMount() {
	    this.pdpSubscription = [swatchStore.addListener(() => this.toggleButton()), sizeStore.addListener(() => this.toggleButton())];
	}

	componentWillUnmount() {
	    this.pdpSubscription.remove();
	}

	render(){
		return(
				<div className="col-md-3">
                        <p>
                           <button type="button" disabled={this.state.disabled} className="btn btn-primary btn-lg" onClick={action.addtobag}>Add to bag</button>
                        </p>
                </div>
			);
	}
}
 
