import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';
import Price from '../components/Price';
import Carousel from '../components/ProductCarousel';
import Notification from '../components/Notification';


const CHANGE_EVENT = 'change';

let __emitter = new EventEmitter();

let PdpStore = {
  data: {},
  setData(data) {
    this.data = data;
  },

  getData() {
    return this.data;
  },

  setPricemap(map){
    this.priceMap = map;
  },

  getPricemap(){
    return this.priceMap;
  },

  addListener(callback) {
    return __emitter.addListener(CHANGE_EVENT, callback);
  },

};

AppDispatcher.register((action) => {

  switch (action.type) {

    case PDPCONSTANTS.SWATCH_CLICKED:
      PdpStore.setData(priceMap[action.swatch.value]);
      // Carousel.update(action.swatch.dataset.imagesetId);
      __emitter.emit(CHANGE_EVENT);
      break;

    case PDPCONSTANTS.UPDATE_CAROUSEL:
      PdpStore.setCarouselData(action.data);
      __emitter.emit()
      break;

    case PDPCONSTANTS.SIZE_CLICKED:
      PdpStore.setData(priceMap[action.swatch.value]);
      __emitter.emit(CHANGE_EVENT);
      break;

    case PDPCONSTANTS.UPDATE_CAROUSEL:
      Notification.show();
      __emitter.emit(CHANGE_EVENT);
      break;
  } });

export default PdpStore;
