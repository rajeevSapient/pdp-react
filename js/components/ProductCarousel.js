import React, {Component} from 'react';
import scene7Service from '../utils/scene7Handler';
import store from '../store/carouselStore';

export default class ProductCarousel extends Component{

	constructor(){
		super(...arguments);
		this.state={
			imageMap: []
		};
	}

	componentWillMount(){
		scene7Service.scene7Proxy(this.props.defaultImagesetURL, this.props.defaultImagesetId);
	    this.pdpSubscription = store.addListener(() => this.refresh());
	}

	refresh(){
		this.setState({
			imageMap: store.getData()
		});
	}

	componentWillUnmount() {
	    this.pdpSubscription.remove();
	}

	render() {
		let images = this.state.imageMap.map(function(items, index){
			let imgurl = '//asset1.cxnmarksandspencer.com/is/image/'+items.split(';')[0]+'?$PDP_PROD_IMAGE$';
			return <img className="prod" src={imgurl} key={index}/>;
		});
		 
		 return(
            <div className="col-md-4">
		 		{images}
		 	</div>
		 );
	}
}
