
import React, {PropTypes} from 'react';
import './App.css';
import './Star.jsx';
import './Answer.jsx';
import './Numbercomponent.jsx';
import Star from './Star.jsx';
import Answer from './Answer.jsx';
import Numbercomponent from './Numbercomponent.jsx';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      selectedNumbers : [ ],
      answerIsCorrect: null,
      isRedrawClicked: false,
      numberOfStars : Math.floor(Math.random() * 9 + 1),
    };

    this.handleSelectedNumbers = this.handleSelectedNumbers.bind(this);
    this.handleUnselectedNumbers = this.handleUnselectedNumbers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.redrawCard = this.redrawCard.bind(this);
  
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

  redrawCard () {
    this.setState(prevState => ({
          answerIsCorrect : null,
          isRedrawClicked : !prevState.isRedrawClicked,
          numberOfStars : Math.floor(Math.random() * 9 + 1)
    }))
  };

  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect, isRedrawClicked} = this.state;
  
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
       <Star numberOfStars={this.state.numberOfStars}/>
       <Answer selectedNumbers={this.state.selectedNumbers} 
               numberOfStars={this.state.numberOfStars} 
               checkAnswer={this.checkAnswer} 
               answerIsCorrect={answerIsCorrect}
               handleUnselectedNumbers = {this.handleUnselectedNumbers}
               redrawCard = {this.redrawCard}
               isRedrawClicked = {isRedrawClicked}/>
       <Numbercomponent selectedNumbers={this.state.selectedNumbers} handleSelectedNumbers={this.handleSelectedNumbers}></Numbercomponent>
     </div>
     );
  }
};
