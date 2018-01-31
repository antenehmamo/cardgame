import React, { Component } from 'react';

import './Answer.css';
import '../../fontawesome/web-fonts-with-css/css/fontawesome.min.css';

class Answer extends React.Component {
  constructor(props){
    super(props);
  };
  

  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect} = this.props;
   
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
           <button class="answerbutton" onClick={this.props.checkAnswer}>
                <span className="equals">=</span>
           </button>;
           break;
    };
    return (
      
      <div className="Answer">

       {console.log('ans',answerIsCorrect)}
      {button}
       
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