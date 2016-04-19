import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';
import sizeStore from './sizeStore';

const CHANGE_EVENT = 'swatchSelected';

let __emitter = new EventEmitter();

let swatchStore = {
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
 
swatchStore.dispatchToken = AppDispatcher.register((action) => {

  switch (action.type) {

    case PDPCONSTANTS.SWATCH_CLICKED:
      swatchStore.setData(action.swatch);
      sizeStore.setData(undefined);
      __emitter.emit(CHANGE_EVENT);
      break;
      
  } });

export default swatchStore;
