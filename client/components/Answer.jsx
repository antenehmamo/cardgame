import React, { Component } from 'react';

import './Answer.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Answer extends React.Component {
 
  render() {
    return (
      <div className="Answer">
        <button id="answerid" class="answerbutton">
          <i class="fas fa-angle-double-right"></i>
        </button>
        <span>{this.props.firstAnswer}</span>
        <span>{this.props.secondAnswer}</span>
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