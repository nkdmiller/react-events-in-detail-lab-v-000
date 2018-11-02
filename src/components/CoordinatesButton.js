import React, {Component} from 'react';


export default class CoordinatesButton extends Component {
  onReceiveCoordinates = () => {console.log('Entering password...')};
  render () {
    return(
  <input onKeyUp={this.typing} type="password" />)
  }
}
