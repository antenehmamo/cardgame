import React, { Component } from 'react';

import './Answer.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Answer extends React.Component {
 
  render() {
    const { selectedNumbers } = this.props;
    return (
      <div className="Answer">
        <button id="answerid" class="answerbutton">
          <i class="fas fa-angle-double-right"></i>
        </button>
      {
        selectedNumbers.map((number,i) => <span key={i}>{number}</span>)
      }
        
        
        <div>
        <button class="redrawbutton">
          REDRAW 
         {this.props.redrawCount}
        </button>
        </div>
      </div>
    )
 }
}

export default Answer;