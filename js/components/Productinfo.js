import React, {Component} from 'react';
import Price from './Price';
import Swatch from './Swatch';
import Size from './Size';
import Quantity from './Quantity';
import Addtobag from './Addtobag';


export default class Productinfo extends Component{

	render(){
		return(
			<div className="col-md-8">
               <div className="row">
                  <p className="text-info">M&S COLLECTION</p>
               </div>
               <div className="row"><span>Belted Trench Shirt Dress</span></div>
               <div className="row"><span>T426528</span></div>
               <div className="row">
                  <Price priceObj={this.props.priceObj}/>
               </div>
               <div className="row">
                  <hr/>
                  <p className="text-info"><a href="#">Free standard delivery on orders over £50. Conditions apply.</a></p>
                  <hr/>
               </div>
               <form action="">
                  <Swatch swatchObj={this.props.swatchObj}/>
                  <Size />
                  <div className="row">
                     <hr/>
                     <Addtobag />
                     <Quantity />
                  </div>
               </form>
            </div>
			);
	}
}
