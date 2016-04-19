import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PDPCONSTANTS from '../constants';
import Notification from '../components/Notification';


const CHANGE_EVENT = 'productAdded';

let __emitter = new EventEmitter();

let addtobagStore = {

  url: '/js/data/addProduct.json',
  data: {},

  setData(json, error){
    this.data.msg = json.msg;
    this.data.error = error
  },

  getData(){
    return this.data;
  },

  addtobag(){

    fetch(this.url).then(function(resp){
      resp.json().then(function(json){
        addtobagStore.setData(json, false);
        __emitter.emit(CHANGE_EVENT);
      });
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  },

  addListener(callback) {
    return __emitter.addListener(CHANGE_EVENT, callback);
  },
};

AppDispatcher.register((action) => {

  switch (action.type) {
    
    case PDPCONSTANTS.ADDTOBAG:
      addtobagStore.addtobag();
      break;
  } });

export default addtobagStore;
