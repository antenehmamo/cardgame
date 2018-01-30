
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
    };

    this.handleSelectedNumbers = this.handleSelectedNumbers.bind(this);
  
  }

  handleSelectedNumbers(number){
    this.setState(prevState =>
       ({selectedNumbers : prevState.selectedNumbers.concat(number)}))
  };

  render() {
    
    return (
     <div className="Cardcontainer">
     <h1 className="header">fun card game</h1>
       <Star/>
       <Answer selectedNumbers={this.state.selectedNumbers}/>
       <Numbercomponent selectedNumbers={this.state.selectedNumbers} handleSelectedNumbers={this.handleSelectedNumbers}></Numbercomponent>
     </div>
     );
  }
};
