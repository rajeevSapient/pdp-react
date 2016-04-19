import React from 'react';
import ReactDom from 'react-dom';
import httpClient from 'axios';
import App from './js/App';
import scene7Service from './js/utils/scene7Handler';

window.s7jsonResponse = function(resp, imageSetId){
  scene7Service.setImageMap(resp.IMAGE_SET.split(','), imageSetId);
}

/*function fetchSwatch() {
    return httpClient.get('/js/data/swatch.json');
}
function fetchPrice() {
   return httpClient.get('/js/data/price.json');
}*/

function fetchData(){
	return httpClient.get('/js/data/data.json');
}


function fetchRequiredData() {
   httpClient.all([fetchData()]).then((resp) => {
	// ReactDom.render(<App swatchObj={resp[0].data} priceObj={resp[1].data} defaultImagesetId="T42_6528_SS_IS" defaultImagesetURL="//asset1.cxnmarksandspencer.com/is/image/mands/T42_6528_SS_IS?req=imageset,json&id=T42_6528_SS_IS"/>, document.getElementById('app'));
	ReactDom.render(<App swatchObj={resp[0].data} defaultImagesetId="T42_6528_SS_IS" defaultImagesetURL="//asset1.cxnmarksandspencer.com/is/image/mands/T42_6528_SS_IS?req=imageset,json&id=T42_6528_SS_IS"/>, document.getElementById('app'));

   });
}

fetchRequiredData();
