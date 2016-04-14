import React, {Component} from 'react';
import swatchStore from '../store/swatchStore';

export default class Price extends Component{

	constructor() {
    super(...arguments);
    this.state = {
      price: '£3.00',
    };
	}

	componentDidMount() {
    console.log('price compoent');
    this.pdpSubscription = swatchStore.addListener(() => this.update());
  }

  componentWillUnmount() {
    this.pdpSubscription.remove();
  }

	update() {
    debugger;
    this.setState({
      price: this.props.priceObj[swatchStore.getData()].price,
    });
	}

	render() {
  		return <strong>{this.state.price}</strong>;
	}
}

