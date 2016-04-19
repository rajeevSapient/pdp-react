import AppDispatcher from '../dispatcher/AppDispatcher';
import pdpConstants from '../constants';

let PdpAction = {
  swatchClicked(swatchEl) {
    AppDispatcher.dispatch({
        type: pdpConstants.SWATCH_CLICKED,
        swatch: swatchEl
      });
  },
  refreshCarousel(data, cache){
  	AppDispatcher.dispatch({
  		type: pdpConstants.UPDATE_CAROUSEL,
  		data,
      cache
  	});
  },
  addtobag(){
    AppDispatcher.dispatch({
      type: pdpConstants.ADDTOBAG
    });
  },
  sizeClick(sizeEl){
    AppDispatcher.dispatch({
        type: pdpConstants.SIZE_CLICKED,
        sizeEl: sizeEl
    });
  },
};
export default PdpAction;
