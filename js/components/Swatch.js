import React, {Component} from 'react';
import PDPAction from '../action/PdpAction';
// import PdpStore from '../store/PdpStore';

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
        // console.log("swatch clicked ", e.target.value);
        this.setState({
          selectedSwatch: e.target.value,
          label: 'Selected color'
        });
        PDPAction.swatchClicked(e.target);
    	}

  	render() {
      let swatchNode = this.props.swatchObj.swatch.map(function (swatch) {
        return (
                  <div key={swatch.id}>
    						    <input type="radio" onClick={this.swatchClick} name="color" id={swatch.colorName} value={swatch.colorName} data-imageset-id={swatch.imageset}/>
          					<label htmlFor={swatch.colorName}><img src={swatch.imgSrc} alt={swatch.colorName} color Belted Trench Shirt /></label>
          				</div>
        );
      }, this);

      return <div className="row"><p>{this.state.label}: {this.state.selectedSwatch}</p>{swatchNode}</div>
  	}
}
