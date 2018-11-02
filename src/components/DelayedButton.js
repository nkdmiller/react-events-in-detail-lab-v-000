import React, {Component} from 'react';


export default class CoordinatesButton extends Component {
  clickButton = (e) => {
    setTimeout(this.onDelayedClick)
    this.props.onReceiveCoordinates(coordinates)
  }
   render(){
    return (
      <button onClick={this.clickButton}>
      </button>
    )
  }
}
