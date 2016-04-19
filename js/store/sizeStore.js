import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';

const CHANGE_EVENT = 'sizeSelected';

let __emitter = new EventEmitter();

let sizeStore = {
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
 
sizeStore.dispatchToken = AppDispatcher.register((action) => {

  switch (action.type) {

    case PDPCONSTANTS.SIZE_CLICKED:
      sizeStore.setData(action.sizeEl);
      __emitter.emit(CHANGE_EVENT);
      break;
      
  } });

export default sizeStore;
