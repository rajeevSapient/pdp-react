import AppDispatcher from '../dispatcher/AppDispatcher';
import pdpConstants from '../constants';

let PdpAction = {
  swatchClicked(swatchEl) {
    AppDispatcher.dispatch({
        type: pdpConstants.SWATCH_CLICKED,
        swatch: swatchEl,
      });
  },
  refreshCarousel(data){
  	AppDispatcher.dispatch({
  		type: pdpConstants.UPDATE_CAROUSEL,
  		data: data
  	});
  }
};
export default PdpAction;
