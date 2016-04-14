import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';
import Price from '../components/Price';
import Carousel from '../components/ProductCarousel';
import Notification from '../components/Notification';

// alert("hello");

const CHANGE_EVENT = 'change';

let __emitter = new EventEmitter();

let priceMap = {
  Stone: {
    price: '£2.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
  Black: {
    price: '£11.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
  Stone_32: {
    price: '£12.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
  Stone_30: {
    price: '£3.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
  Black_32: {
    price: '£1.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
  Black_30: {
    price: '£7.50',
    prevPrice: '',
    offerText: '',
    unitPrice: '',
  },
};

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

    case PDPCONSTANTS.SIZE_CLICKED:
      PdpStore.setData(priceMap[action.swatch.value]);
      __emitter.emit(CHANGE_EVENT);
      break;
      
  } });

export default PdpStore;
