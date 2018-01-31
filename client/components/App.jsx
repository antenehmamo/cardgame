
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
      numberOfStars : Math.floor(Math.random() * 9 + 1),
      answerIsCorrect: null
    };

    this.handleSelectedNumbers = this.handleSelectedNumbers.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  
  }

  handleSelectedNumbers(number){
    this.setState(prevState =>
       ({selectedNumbers : prevState.selectedNumbers.concat(number)}))
  };

  checkAnswer ( ) {
    this.setState(prevState => ({
          answerIsCorrect: prevState.selectedNumbers.reduce((accumlator,n)=> accumlator+n, 0) === prevState.numberOfStars
    }));
  }

  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect } = this.state;
  
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
       <Star numberOfStars={this.state.numberOfStars}/>
       <Answer selectedNumbers={this.state.selectedNumbers} numberOfStars={this.state.numberOfStars} 
       checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect}/>
       <Numbercomponent selectedNumbers={this.state.selectedNumbers} handleSelectedNumbers={this.handleSelectedNumbers}></Numbercomponent>
     </div>
     );
  }
};
