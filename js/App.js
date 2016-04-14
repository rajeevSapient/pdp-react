import React, {Component} from 'react';
import Productinfo from './components/Productinfo';
import ProductCarousel from './components/ProductCarousel';

class App extends Component {
  constructor(){
    super(...arguments);
  }

	render() {
    return(
      <div className="container">
          <div className="row">Home / Women /Dresses</div>
            <div className="row">
              <ProductCarousel defaultImagesetId={this.props.defaultImagesetId} defaultImagesetURL={this.props.defaultImagesetURL}/>
              <Productinfo swatchObj={this.props.swatchObj} priceObj={this.props.priceObj}/>
        </div>
      </div>
      );
  	}
}
export default App;
