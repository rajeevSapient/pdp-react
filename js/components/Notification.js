import React, {Component} from 'react';
import addtobagStore from '../store/addtobagStore';
import swatchStore from '../store/swatchStore';

export default class Notification extends Component {
	
	constructor() {
		super(...arguments);
		this.state={
			msg: '',
			class: 'alert alert-success',
			display: 'invisible'
		}
	}

	getClass(error){
		return error === true ? 'alert alert-danger' : 'alert alert-success';
	}

	hideNotification(){
		this.setState({
			display: 'invisible'
		});
	}

	componentDidMount() {
	    this.pdpSubscription = [addtobagStore.addListener(() => this.update()), swatchStore.addListener(() => this.hideNotification())];
	}

	componentWillUnmount() {
	    this.pdpSubscription.remove();
	}

	update(){
		this.setState({
			msg: addtobagStore.getData().msg,
			class: this.getClass(addtobagStore.getData().error),
			display: ''
		});
	}

	render(){
		return(
			<div className={'row '+ this.state.display}>
				<div className={this.state.class}>
					{this.state.msg}
				</div>
			</div>
		);
	}
}
