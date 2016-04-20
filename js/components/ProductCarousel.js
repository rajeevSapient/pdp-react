import React, {Component} from 'react';
import scene7Service from '../utils/scene7Handler';
import store from '../store/carouselStore';
import swatchStore from '../store/swatchStore';

export default class ProductCarousel extends Component{

	constructor(){
		super(...arguments);
		this.state={
			imageMap: []
		};
		this.makeImageRequest();
		
	}

	makeImageRequest() {
		
		let url = swatchStore.getData() ? swatchStore.getData().dataset.imageseturl : this.props.defaultImagesetURL,
			imageSetId = swatchStore.getData() ? swatchStore.getData().dataset.imagesetid : this.props.defaultImagesetId;

		let images = scene7Service.scene7Proxy(url, imageSetId);

		//hack to contain dispatch error
		if(images !== undefined){
			this.refresh(images);
		}
	}

	componentWillMount(){
		
	    this.pdpSubscriptions = [swatchStore.addListener(() => this.makeImageRequest()), store.addListener(() => this.refresh())];

	}

	refresh(images){

		this.setState({
			imageMap: images || store.getData()
		});

	}

	componentWillUnmount() {
	    this.pdpSubscriptions.remove();
	}

	render() {
		let images = this.state.imageMap.map(function(items, index){
			let imgurl = '//asset1.cxnmarksandspencer.com/is/image/'+items.split(';')[0]+'?$PDP_PROD_IMAGE$';
			return <img className="prod" src={imgurl} key={index}/>;
		});
		 
		 return(
            <div className="col-md-4 pheight">
		 		{images}
		 	</div>
		 );
	}
}
