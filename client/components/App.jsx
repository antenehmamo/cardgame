
import React, {PropTypes} from 'react';
import './App.css';
import './Star.jsx';
import './Answer.jsx';
import './Numbercomponent.jsx';
import Star from './Star.jsx';
import Answer from './Answer.jsx';
import Numbercomponent from './Numbercomponent.jsx';
import _ from 'lodash';
import DoneFrame from './DoneFrame.jsx';
import {reset} from "../../fontawesome/advanced-options/use-with-node-js/fontawesome";


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      selectedNumbers : [ ],
      usedNumbers : [ ],
      answerIsCorrect: null,
      isRedrawClicked: false,
      numberOfStars : Math.floor(Math.random() * 9 + 1),
      redrawCount : 5,
      doneStatus : null
    };

    this.handleSelectedNumbers = this.handleSelectedNumbers.bind(this);
    this.handleUnselectedNumbers = this.handleUnselectedNumbers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.redrawCard = this.redrawCard.bind(this);
    this.acceptAnswer = this.acceptAnswer.bind(this);
    this.updateDoneStatus = this.updateDoneStatus.bind(this);
    this.possibleSolutions = this.possibleSolutions.bind(this);
    this.possibleCombinationSum = this.possibleCombinationSum.bind(this);
    this.resetGame = this.resetGame.bind(this);
  
  }
  
  handleSelectedNumbers(number){
    this.setState(prevState =>
       ({answerIsCorrect : null,
        selectedNumbers : prevState.selectedNumbers.concat(number)}))
  };

  handleUnselectedNumbers(unselectedNumber){
    this.setState(prevState =>
       ({answerIsCorrect : null,
        selectedNumbers : prevState.selectedNumbers.filter(number => number !== unselectedNumber)}))
  };

  checkAnswer ( ) {
    this.setState(prevState => ({
          answerIsCorrect: prevState.selectedNumbers.reduce((accumlator,n)=> accumlator+n, 0) === prevState.numberOfStars
    }));
  }

  acceptAnswer () {
     this.setState(prevState => ({
        answerIsCorrect: null,
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        numberOfStars:Math.floor(Math.random() * 9 + 1)
     }), this.updateDoneStatus);
  };

  redrawCard () {
    if(this.state.redrawCount === 0){
       return;
    }  
    this.setState(prevState => ({
          redrawCount     : prevState.redrawCount - 1,
          answerIsCorrect : null,
          isRedrawClicked : true,
          numberOfStars : Math.floor(Math.random() * 9 + 1),
          selectedNumbers : []
    }), this.updateDoneStatus);
  };
  
possibleCombinationSum (arr, n) {
  if(arr.length === 0){
    return false;
  }
  if(arr.indexOf(n) >= 0){
    return true;
  }
 if(arr[0] > n){
   return false;
 }
 if(arr[arr.length -1] > n){
   arr.pop();
   return this.possibleCombinationSum(arr,n);
 }

 var listSize = arr.length, combinationsCount = (1 << listSize);
 for(var i = 1; i< combinationsCount ; i++){
   var combinationsSum = 0;
     for(var j=0; j < listSize ; j++) {
        if(i & (1 << j)) { combinationsSum += arr[j];}
     }
     if( n == combinationsSum) { return true;}
 }
 return false;
  };


possibleSolutions (prevState){
      const possibleNumbers = _.range(1,10).filter(number => prevState.usedNumbers.indexOf(number) === -1);
      console.log('possibleNumbers',possibleNumbers);
      return this.possibleCombinationSum(possibleNumbers,prevState.numberOfStars);
}

updateDoneStatus (){

  this.setState(prevState => {
    if(prevState.usedNumbers.length === 9){
      return { doneStatus : 'Congratulations, you WON !'};
    }
    if(prevState.redrawCount === 0 && !this.possibleSolutions(prevState)){
      return { doneStatus : 'Game Over'}
    }
     
  });

};

    resetGame(){

        this.setState(() => ({
                selectedNumbers: [],
                usedNumbers: [],
                answerIsCorrect: null,
                isRedrawClicked: false,
                numberOfStars: Math.floor(Math.random() * 9 + 1),
                redrawCount: 5,
                doneStatus: null
            })
        );

    };

  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect, isRedrawClicked,
            redrawCount, usedNumbers, doneStatus} = this.state;
  
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
       <Star numberOfStars={numberOfStars}/>
       <Answer selectedNumbers={this.state.selectedNumbers} 
               numberOfStars={this.state.numberOfStars} 
               checkAnswer={this.checkAnswer} 
               answerIsCorrect={answerIsCorrect}
               handleUnselectedNumbers = {this.handleUnselectedNumbers}
               redrawCard = {this.redrawCard}
               isRedrawClicked = {isRedrawClicked}
               redrawCount = {redrawCount}
               acceptAnswer = {this.acceptAnswer}/>
      { doneStatus ?
       <DoneFrame doneStatus = {doneStatus}/>
       :
       <Numbercomponent 
              selectedNumbers={selectedNumbers}
              handleSelectedNumbers={this.handleSelectedNumbers}
              usedNumbers={usedNumbers}>
      </Numbercomponent>
     
      }
     </div>
     );
  }
};
