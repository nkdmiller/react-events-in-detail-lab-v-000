import React, {Component} from 'react';


export default class CoordinatesButton extends Component {
  onReceiveCoordinates = (x,y) => {console.log('Entering password...')};
  render () {
    return(
  <input onKeyUp={this.typing} type="password" />)
  }
}
