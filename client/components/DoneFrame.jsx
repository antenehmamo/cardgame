import React, { Component } from 'react';

import './Numbercomponent.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';


class DoneFrame extends React.Component {
    constructor(props){
      super(props);
}

  render() {
   
    const { doneStatus}  = this.props;
    return (
      <div className="doneFrame">
       <h2>{doneStatus}</h2>
          <button className="playAgain" onClick={this.props.playAgain}>Play Again</button>
      </div>
    )
  }
}
export default DoneFrame;