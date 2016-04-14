import React, {Component} from 'react';

export default class Notification extends Component {
	constructor() {
		super(...arguments);
		this.show = this.show.bind(this);
		this.state = {
			msg: '',
		};
	}

	show(msg) {
		this.setState({
			msg: 'temp msg',
		});
	}

	render() {
		return ( < h1 > {
				this.state.msg
			} < /h1>);

		}
	}
