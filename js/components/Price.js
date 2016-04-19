import React, {Component} from 'react';
import swatchStore from '../store/swatchStore';
import sizeStore from '../store/sizeStore';

export default class Price extends Component{

	constructor() {
    super(...arguments);
    this.state = {
      price: '3.00',
    };
	}

	componentDidMount() {
    this.pdpSubscription = [swatchStore.addListener(() => this.update()), sizeStore.addListener(() => this.update())];
  }

  componentWillUnmount() {
    this.pdpSubscription.remove();
  }

  priceResolver(){

    let price, swatch = swatchStore.getData().value, size = sizeStore.getData() || undefined;

    if(typeof swatch !== "undefined" && typeof size !== "undefined"){

      price = this.props.priceObj[swatch].sizes[size].price;

    }else if(typeof swatch !== "undefined" && typeof size === "undefined"){

      price = this.props.priceObj[swatch].price;

    }/*else if(typeof swatch === "undefined" && typeof size !== "undefined"){

      price = this.props.priceObj[size].price;

    }*/else{
      console.log("free free free, loot lo...");
      price = 0.0;
    }

    return price;

  }
  //this.props.priceObj[swatchStore.getData().value].price,
	update(swatch, size) {
    this.setState({
      price: this.priceResolver(),
    });
	}

	render() {
  		return <strong>&pound;{this.state.price}</strong>;
	}
}

