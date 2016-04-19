import Carousel from '../components/ProductCarousel';
import PDPAction from '../action/PdpAction';

const scene7Handler = {

	imagesetMap: {},

	makerequest(url){
		let script = document.createElement("script");
	    script.src = url;
    	document.head.appendChild(script);
	},

	setImageMap(data, imageSetId){
		console.log("setImageMap");
		this.imagesetMap[imageSetId] = data;
		PDPAction.refreshCarousel(data, false);
	},

	scene7Proxy(url, imageSetId){
		console.log("scene7Proxy");
		if(this.imagesetMap[imageSetId]){
			return this.imagesetMap[imageSetId];
			// PDPAction.refreshCarousel(this.imagesetMap[imageSetId], true);
		}else{
			this.makerequest(url);
		}
	},
}

export default scene7Handler;

