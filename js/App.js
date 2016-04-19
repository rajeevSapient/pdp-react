import React, {Component} from 'react';
import Productinfo from './components/Productinfo';
import ProductCarousel from './components/ProductCarousel';
import Notification from './components/Notification';

class App extends Component {
  constructor(){
    super(...arguments);
  }

	render() {
    return(
      <div className="container">
          <div className="row">Home / Women /Dresses</div>
            <Notification />
            <div className="row">
              <!-- <ProductCarousel defaultImagesetId={this.props.defaultImagesetId} defaultImagesetURL={this.props.defaultImagesetURL}/> -->
              <Productinfo swatchObj={this.props.swatchObj}/>
        </div>
      </div>
      );
  	}
}
export default App;
