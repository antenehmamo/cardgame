import React, { Component } from 'react';

import './Answer.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Answer extends React.Component {
  constructor(props){
    super(props);
  };
  

  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect, isRedrawClicked} = this.props;

    let currentlySelected = [];
    ( isRedrawClicked === true ) ? currentlySelected=[]: currentlySelected=selectedNumbers;
   
    let button;
    switch(this.props.answerIsCorrect){
        case true:
           button = 
           <button class="answerbutton">
               <i className="fa fa-check"></i>
           </button>;
           break;
        case false:
            button =
            <button class="answerbutton">
               <i className="fa fa-times"></i>
           </button>;
           break;
        default:
           button =
           <button class="answerbutton" onClick={this.props.checkAnswer} disabled={this.props.selectedNumbers.length === 0}>
                <span className="equals">=</span>
           </button>;
           
           break;
    };
    return (
      
      <div className="Answer">

       {console.log('ans',answerIsCorrect)}
      {button}
       
      { 
       
       currentlySelected.map((number,i) => 
        <button key={i} className="selectedAnswers" onClick={() => this.props.handleUnselectedNumbers(number)}>
            {number}
        </button>)
      }
       
        <div>
        <button class="redrawbutton" onClick={this.props.redrawCard}>
          REDRAW 
         {this.props.redrawCount}
        </button>
        </div>
      </div>
    )
 }
}

export default Answer;