import React, {Component} from 'react';


export default class CoordinatesButton extends Component {
  clickButton = (e) => {
    setTimeout(() => {this.onDelayedClick, this.delay})
  }
   render(){
    return (
      <button onClick={this.clickButton}>
      </button>
    )
  }
}
