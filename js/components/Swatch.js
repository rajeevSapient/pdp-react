import React, {Component} from 'react';
import PDPAction from '../action/PdpAction';

export default class Swatch extends Component{

  	constructor() {
      super(...arguments);
      this.state = {
        selectedSwatch: '',
        label: 'Select color'
      };
      this.displayName = 'Swatch';
      this.swatchClick = this.swatchClick.bind(this);
  	}

  	swatchClick(e) {
        this.setState({
          selectedSwatch: e.target.value,
          label: 'Selected color'
        });
        PDPAction.swatchClicked(e.target);
    	}

  	render() {
      let obj = this.props.swatchObj;
      let swatchNode = Object.keys(obj).map(function (key, index) {
        let swatch = obj[key];
        return (
                  <div key={index} className="swatchfloat">
    						    <input type="radio" onClick={this.swatchClick} name="color" id={swatch.colorName} value={swatch.colorName} data-imagesetid={swatch.imagesetId} data-imageseturl={swatch.imageSetUrl}/>
          					<label htmlFor={swatch.colorName}><img src={swatch.imgSrc} alt={swatch.colorName} color Belted Trench Shirt /></label>
          				</div>
        );
      }, this);

      return <div className="row"><p>{this.state.label}: {this.state.selectedSwatch}</p>{swatchNode}</div>
  	}
}
