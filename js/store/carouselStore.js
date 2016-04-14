import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';
import Carousel from '../components/ProductCarousel';


const CHANGE_EVENT = 'refresh';

let __emitter = new EventEmitter();

let CarouselStore = {

  setData(data) {
    this.data = data;
  },

  getData() {
    return this.data;
  },

  addListener(callback) {
    return __emitter.addListener(CHANGE_EVENT, callback);
  }

};

AppDispatcher.register((action) => {

  switch (action.type) {

    case PDPCONSTANTS.UPDATE_CAROUSEL:
      CarouselStore.setData(action.data);
      __emitter.emit(CHANGE_EVENT);
      break;
  	}
  	
});

export default CarouselStore;
